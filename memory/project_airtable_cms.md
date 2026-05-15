---
name: Arquitectura CMS Airtable completa
description: El site NARA Moncada tiene todo el contenido gestionado desde Airtable — 6 tablas nuevas más las 2 existentes. El contexto ContentContext.tsx provee datos a todos los componentes con defaults embebidos.
type: project
---

Se implementó migración completa de todo el contenido hardcodeado a Airtable (mayo 2025).

**Nuevas tablas creadas en Airtable:**
- `CONFIGURACION` — config global (1 registro): nombre, precios, horarios, teléfono, URLs de documentos, colores, footer
- `SECCIONES` — copys por sección (clave: hero/nosotros/proyecto/amenidades/detalles/propiedad)
- `IMAGENES` — biblioteca de imágenes por sección (adjuntos Airtable)
- `AMENIDADES` — lista de servicios con campo Icono (string mapeado a LucideIcon)
- `ZONAS_COMUNES` — zonas comunes detalladas
- `NAVEGACION` — ítems del menú flotante

**Tablas existentes (sin cambios estructurales):**
- `TIPOLOGÍAS`, `UNIDADES`

**Arquitectura del código:**
- `src/services/airtable.ts` — fetchers tipados para las 8 tablas
- `src/context/ContentContext.tsx` — ContentProvider con defaults embebidos; todos los componentes consumen `useContent()`
- `src/vite-env.d.ts` — declaraciones de módulos de imagen (*.png, *.jpg, etc.)
- Todos los componentes usan imagen de Airtable con fallback a import estático

**Comportamiento de fallback:** Si una tabla de Airtable no existe o está vacía, el site muestra los valores por defecto del código. No se rompe nada.

**Guía para PM:** `AIRTABLE_GUIDE.md` en la raíz del proyecto.

**Why:** El cliente quería gestionar todo el contenido sin tocar código.
**How to apply:** Cualquier cambio de contenido va a Airtable, no al código.
