#!/usr/bin/env node
/**
 * Importa los CSVs exportados de Airtable (airtable-export/) y genera:
 *   - src/data/content.ts  (contenido estático tipado)
 *   - public/attachments/  (adjuntos descargados, porque las URLs de Airtable caducan)
 *   - airtable-export/attachments.json (mapa nombre-local ← URL original)
 *
 * Uso:  node scripts/import-airtable-csv.mjs
 * Requiere node >= 18 (fetch global).
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import path from 'node:path';

const ROOT = path.resolve(new URL('.', import.meta.url).pathname, '..');
const EXPORT_DIR = path.join(ROOT, 'airtable-export');
const ATT_DIR = path.join(ROOT, 'public', 'attachments');
const OUT_TS = path.join(ROOT, 'src', 'data', 'content.ts');

// ─── CSV (RFC4180, con BOM) ─────────────────────────────────────────────────
function parseCsv(text) {
  text = text.replace(/^\uFEFF/, '');
  const rows = [];
  let row = [], cell = '', inQ = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQ) {
      if (c === '"') {
        if (text[i + 1] === '"') { cell += '"'; i++; }
        else inQ = false;
      } else cell += c;
    } else if (c === '"') inQ = true;
    else if (c === ',') { row.push(cell); cell = ''; }
    else if (c === '\r') { /* skip */ }
    else if (c === '\n') { row.push(cell); rows.push(row); row = []; cell = ''; }
    else cell += c;
  }
  if (cell !== '' || row.length) { row.push(cell); rows.push(row); }
  return rows.filter(r => r.some(c => c !== ''));
}

function csvToObjects(file) {
  const rows = parseCsv(readFileSync(path.join(EXPORT_DIR, file), 'utf8'));
  const headers = rows[0];
  return rows.slice(1).map(r => {
    const obj = {};
    headers.forEach((h, i) => { obj[h.trim()] = (r[i] ?? '').trim(); });
    return obj;
  });
}

// ─── Coerciones ─────────────────────────────────────────────────────────────
const num = v => (v === '' ? undefined : Number(String(v).replace(/[^0-9.\-]/g, '')));
const bool = v => (v === 'checked' ? true : v === '' ? undefined : v === 'true');
const str = v => (v === '' ? undefined : v);
const currency = v => (v === '' ? undefined : Number(String(v).replace(/[^0-9.\-]/g, '')));
const strList = v => (v === '' ? undefined : v.split(',').map(s => s.trim()).filter(Boolean));

/** extrae pares nombre (url) de una celda de adjuntos de Airtable */
function parseAttachments(cell) {
  if (!cell) return [];
  const re = /\((https?:\/\/[^)\s]+)\)/g;
  const out = [];
  let m, last = 0;
  while ((m = re.exec(cell))) {
    let name = cell.slice(last, m.index).replace(/[;"]/g, '').trim();
    out.push({ name: name || 'adjunto', url: m[1] });
    last = re.lastIndex;
  }
  return out;
}

// ─── Descarga de adjuntos ───────────────────────────────────────────────────
const sanitize = n => n.normalize('NFC').replace(/[\/]/g, '-').replace(/\s+/g, '_').replace(/[^ .\-()\w\u00C0-\u024F]/g, '');
const urlMap = JSON.parse(existsSync(path.join(EXPORT_DIR, 'attachments.json')) ? readFileSync(path.join(EXPORT_DIR, 'attachments.json'), 'utf8') : '{}');
const nameCount = {};
const hashIndex = {};

async function download(att) {
  if (urlMap[att.url]) return urlMap[att.url];
  let base = sanitize(att.name) || 'adjunto';
  if (!path.extname(base)) base += guessExt(att.url);
  let file = base, i = 2;
  while (nameCount[file]) { file = base.replace(/(\.[^.]+)?$/, `-${i++}$1`); }
  nameCount[file] = true;
  const dest = path.join(ATT_DIR, file);
  try {
    const res = await fetch(att.url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    const hash = createHash('sha256').update(buf).digest('hex');
    if (hashIndex[hash]) {
      // contenido idéntico ya descargado con otro nombre → reutilizar
      console.log(`  = ${file} (duplicado de ${hashIndex[hash]})`);
      file = hashIndex[hash];
    } else {
      hashIndex[hash] = file;
      writeFileSync(dest, buf);
      console.log(`  ✓ ${file} (${buf.length} bytes)`);
    }
  } catch (e) {
    console.warn(`  ✗ FALLO descarga ${file}: ${e.message} — se usa la URL original (¡caduca!)`);
    file = null;
  }
  urlMap[att.url] = file;
  return file;
}

function guessExt(url) {
  const p = new URL(url).pathname.toLowerCase();
  if (p.includes('.png')) return '.png';
  if (p.includes('.jpg') || p.includes('.jpeg')) return '.jpg';
  if (p.includes('.webp')) return '.webp';
  if (p.includes('.pdf')) return '.pdf';
  return '';
}

async function attachmentsField(cell, counter) {
  const atts = parseAttachments(cell);
  if (!atts.length) return undefined;
  const result = [];
  for (const a of atts) {
    const file = await download(a);
    result.push({ id: `att-${counter.n++}`, filename: file ?? a.name, url: file ? `/attachments/${encodeURIComponent(file)}` : a.url, size: 0, type: '' });
  }
  return result;
}

// ─── Mapeo por tabla ────────────────────────────────────────────────────────
async function main() {
  mkdirSync(ATT_DIR, { recursive: true });
  mkdirSync(path.dirname(OUT_TS), { recursive: true });
  const counter = { n: 1 };

  const CONFIG_RENAME = { 'Dossier': 'URL Dossier', 'Memoria Calidades': 'URL Memoria Calidades' };
  const configRows = csvToObjects('CONFIGURACION-Grid view.csv');
  const CONFIG = { id: 'config' };
  for (const [k, v] of Object.entries(configRows[0] ?? {})) {
    const key = CONFIG_RENAME[k] ?? k;
    if (['Logo'].includes(k)) {
      const att = await attachmentsField(v, counter);
      if (att) CONFIG[key] = att;
    } else if (v !== '') {
      CONFIG[key] = v;
    }
  }

  const SECCIONES = csvToObjects('SECCIONES-Grid view.csv').map(r => ({
    id: r['Clave'], Clave: str(r['Clave']), Título: str(r['Título']), Subtítulo: str(r['Subtítulo']),
    'Párrafo 1': str(r['Párrafo 1']), 'Párrafo 2': str(r['Párrafo 2']), 'Párrafo 3': str(r['Párrafo 3']),
    'Etiqueta Superior': str(r['Etiqueta Superior']), Activo: bool(r['Activo']),
  }));

  const IMAGENES = [];
  for (const r of csvToObjects('IMAGENES-Grid view.csv')) {
    const att = await attachmentsField(r['Imagen'], counter);
    IMAGENES.push({
      id: r['Nombre'], Nombre: str(r['Nombre']), Sección: str(r['Sección']),
      Imagen: att, 'Texto Alt': str(r['Texto Alt']), Orden: num(r['Orden']), Activo: bool(r['Activo']),
    });
  }

  const AMENIDADES = csvToObjects('AMENIDADES-Grid view.csv').map(r => ({
    id: r['Nombre'], Nombre: str(r['Nombre']), Icono: str(r['Icono']), Orden: num(r['Orden']), Activo: bool(r['Activo']),
  }));

  const ZONAS_COMUNES = csvToObjects('ZONAS_COMUNES-Grid view.csv').map(r => ({
    id: r['Nombre'], Nombre: str(r['Nombre']), Descripción: str(r['Descripción']), Orden: num(r['Orden']), Activo: bool(r['Activo']),
  }));

  const NAVEGACION = csvToObjects('NAVEGACION-Grid view.csv').map(r => ({
    id: r['Etiqueta'], Etiqueta: str(r['Etiqueta']), 'ID Sección': str(r['ID Sección']), Orden: num(r['Orden']), Activo: bool(r['Activo']),
  }));

  const TIPOLOGIAS = [];
  for (const r of csvToObjects('TIPOLOGÍAS-Grid view.csv')) {
    const record = {
      id: r['Id'], Nombre: str(r['Nombre']), 'Rango de m²': str(r['Rango de m²']),
      'Descripción Comercial': str(r['Descripción Comercial']),
      'Uds. Totales': num(r['Uds. Totales']), 'Rango Tamaño': str(r['Rango Tamaño']),
      'Zonas Comunes': str(r['Zonas Comunes']), Incluye: str(r['Incluye']),
    };
    for (const col of ['Planos de Tipología', 'Renders de Interior', 'Imagen Principal']) {
      const att = await attachmentsField(r[col], counter);
      if (att) record[col] = att;
    }
    TIPOLOGIAS.push(record);
  }

  const UNIDADES = [];
  for (const r of csvToObjects('UNIDADES-Grid view.csv')) {
    const record = {
      id: r['Referencia'], Referencia: str(r['Referencia']), Tipología: strList(r['Tipología']),
      Planta: str(r['Planta']), Habitaciones: num(r['Habitaciones']),
      'm² Construidos': num(r['m² Construidos']), 'm² Terraza': num(r['m² Terraza']),
      'm2 Vivienda': num(r['m2 Vivienda']),
      'Precio de Venta (PVP)': currency(r['Precio de Venta (PVP)']),
      'PVP Mercado': currency(r['PVP Mercado']),
      Estado: str(r['Estado']), Reservado: bool(r['Reservado']),
    };
    const att = await attachmentsField(r['Documentación'], counter);
    if (att) record['Documentación'] = att;
    UNIDADES.push(record);
  }

  writeFileSync(path.join(EXPORT_DIR, 'attachments.json'), JSON.stringify(urlMap, null, 2));

  const js = obj => JSON.stringify(obj, null, 2);
  const out = `// AUTO-GENERADO por scripts/import-airtable-csv.mjs desde los CSV de Airtable — NO EDITAR A MANO.
// Regenerar: exporta los CSV a airtable-export/ y ejecuta \`node scripts/import-airtable-csv.mjs\`
// Generado: ${new Date().toISOString()}
import type {
  SiteConfig, SeccionContent, ImagenContent, AmenidadContent,
  ZonaComunContent, NavItem, Typology, Unit,
} from '../services/airtable';

export const STATIC_CONFIG: SiteConfig = ${js(CONFIG)};

export const STATIC_SECCIONES: SeccionContent[] = ${js(SECCIONES)};

export const STATIC_IMAGENES: ImagenContent[] = ${js(IMAGENES)};

export const STATIC_AMENIDADES: AmenidadContent[] = ${js(AMENIDADES)};

export const STATIC_ZONAS_COMUNES: ZonaComunContent[] = ${js(ZONAS_COMUNES)};

export const STATIC_NAVEGACION: NavItem[] = ${js(NAVEGACION)};

export const STATIC_TIPOLOGIAS: Typology[] = ${js(TIPOLOGIAS)};

export const STATIC_UNIDADES: Unit[] = ${js(UNIDADES)};
`;
  writeFileSync(OUT_TS, out);
  console.log(`\n✔ src/data/content.ts generado (${UNIDADES.length} unidades, ${TIPOLOGIAS.length} tipologías, ${IMAGENES.length} imágenes, ${SECCIONES.length} secciones)`);
}

main().catch(e => { console.error(e); process.exit(1); });
