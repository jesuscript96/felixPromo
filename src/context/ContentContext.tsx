import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import {
    fetchSiteConfig, fetchSecciones, fetchImagenes,
    fetchAmenidades, fetchZonasComunes, fetchNavegacion,
    SiteConfig, SeccionContent, ImagenContent, AmenidadContent, ZonaComunContent, NavItem,
} from '../services/airtable';

// ─── Valores por defecto (se usan hasta que Airtable responda) ───────────────

const DEFAULT_CONFIG: Omit<SiteConfig, 'id'> = {
    'Nombre Promoción': 'NARA Moncada',
    'Tagline Hero': 'Vanguardia y Diseño en el eje norte de Valencia',
    'Descripción Hero': 'A un paso del CEU y a 20 minutos de Valencia',
    'Subtítulo Hero': '25 Viviendas de 1, 2 dormitorios y Áticos',
    'Localización': 'Valencia, España',
    'Precio Desde': '320.000€',
    'Estado Comercialización': 'EN COMERCIALIZACIÓN',
    'Teléfono': '+34 900 123 456',
    'Dirección Promoción': 'Moncada',
    'CP Promoción': '46113',
    'Ciudad Promoción': 'Moncada, Valencia',
    'Dirección Oficina': 'Avenida de las Cortes Valencianas 58',
    'CP Oficina': '46015',
    'Ciudad Oficina': 'Valencia',
    'Horario L-V': '10:00h - 14:00h | 16:30h - 20:00h',
    'Horario Sábado': '10:00h - 14:00h',
    'Horario Domingo': 'Cerrado',
    'Nombre Marca': 'NARA MONCADA',
    'Crédito Footer': 'by NARA Capital & GOOR.STUDIO',
    'Copyright': 'NARA Capital. Todos los derechos reservados.',
};

const DEFAULT_SECCIONES: Record<string, Omit<SeccionContent, 'id'>> = {
    hero: {
        Clave: 'hero',
        'Etiqueta Superior': 'Promoción',
    },
    nosotros: {
        Clave: 'nosotros',
        'Etiqueta Superior': 'Sobre nosotros',
        Título: 'Oportunidad en Moncada',
        'Párrafo 1': 'En NARA Capital, ofrecemos esta oportunidad en una ubicación privilegiada. Moncada es una zona de alta demanda estratégica por su cercanía con la Universidad CEU Cardenal Herrera.',
        'Párrafo 2': 'Con un crecimiento constante del mercado, NARA Moncada no solo ofrece un hogar excepcional de vanguardia y diseño, sino que también representa una inversión sólida con rentabilidad sostenida.',
    },
    proyecto: {
        Clave: 'proyecto',
        Título: 'Diseño y Exclusividad',
        'Párrafo 1': 'NARA Moncada es un proyecto residencial de obra nueva donde la sostenibilidad y la vanguardia se unen con las mejores calidades para ofrecer una nueva forma de vivir y una rentabilidad inmejorable.',
        'Párrafo 2': 'Ubicado a 20 minutos de Valencia y a 12 minutos a pie del Metro, el edificio cuenta con 25 viviendas de 1, 2 dormitorios y Áticos junto a 25 trasteros y garajes.',
        'Párrafo 3': 'El residencial comparte un diseño arquitectónico exclusivo, garantizando luz natural en los ~2,160 m² de superficie construida.',
    },
    amenidades: {
        Clave: 'amenidades',
        Título: 'Un lugar donde crecer, conectar y vivir experiencias',
        'Párrafo 1': 'NARA Moncada es mucho más que un conjunto de viviendas, es un espacio pensado para elevar el desarrollo personal y la calidad de vida en comunidad. Este residencial incluye servicios y zonas comunes premium que invitan a convivir, relacionarse y relajarse.',
    },
    detalles: {
        Clave: 'detalles',
        Título: 'Espacios comunes Planta Baja',
    },
    propiedad: {
        Clave: 'propiedad',
        Título: 'Tipologías de viviendas',
        Subtítulo: '¿Estás interesado?',
        'Párrafo 1': 'Déjanos tus datos y nos pondremos en contacto contigo lo antes posible.',
        'Etiqueta Superior': 'Ubicación de la promoción',
    },
};

const DEFAULT_AMENIDADES: AmenidadContent[] = [
    { id: 'a1', Nombre: 'Piscina', Icono: 'sun', Orden: 1, Activo: true },
    { id: 'a2', Nombre: 'Gimnasio', Icono: 'dumbbell', Orden: 2, Activo: true },
    { id: 'a3', Nombre: 'Sala Polivalente', Icono: 'building', Orden: 3, Activo: true },
    { id: 'a4', Nombre: 'Garajes y Trasteros', Icono: 'car', Orden: 4, Activo: true },
];

const DEFAULT_ZONAS: ZonaComunContent[] = [
    { id: 'z1', Nombre: 'Piscina Comunitaria', Descripción: 'Disfruta de una zona de baño exclusiva, ideal para refrescarse y relajarse bajo el clima soleado de Valencia, todo dentro del recinto.', Orden: 1, Activo: true },
    { id: 'z2', Nombre: 'Gimnasio', Descripción: 'Zonas deportivas equipadas para mantener un estilo de vida activo y saludable sin tener que salir del edificio.', Orden: 2, Activo: true },
    { id: 'z3', Nombre: 'Sala Polivalente', Descripción: 'Un espacio flexible y acogedor pensado para el ocio, reuniones de la comunidad, y celebraciones, potenciando la vida compartida.', Orden: 3, Activo: true },
    { id: 'z4', Nombre: 'Trasteros y Garajes', Descripción: '25 plazas de aparcamiento y trasteros privados, ofreciendo la máxima comodidad y seguridad en tu día a día.', Orden: 4, Activo: true },
    { id: 'z5', Nombre: 'Terraza Comunitaria', Descripción: 'Amplias terrazas con vistas panorámicas, diseñadas para el descanso y el disfrute al aire libre en un entorno exclusivo.', Orden: 5, Activo: true },
];

const DEFAULT_NAVEGACION: NavItem[] = [
    { id: 'n1', Etiqueta: 'INICIO', 'ID Sección': 'inicio', Orden: 1, Activo: true },
    { id: 'n2', Etiqueta: 'NOSOTROS', 'ID Sección': 'nosotros', Orden: 2, Activo: true },
    { id: 'n3', Etiqueta: 'PROYECTO', 'ID Sección': 'proyecto', Orden: 3, Activo: true },
    { id: 'n4', Etiqueta: 'PROMOCIÓN', 'ID Sección': 'promocion', Orden: 4, Activo: true },
    { id: 'n5', Etiqueta: 'CONTACTO', 'ID Sección': 'contacto', Orden: 5, Activo: true },
];

// ─── Tipos del contexto ──────────────────────────────────────────────────────

export interface ContentState {
    loading: boolean;
    config: SiteConfig;
    secciones: Record<string, SeccionContent>;
    seccionesOrden: string[];
    imagenes: Record<string, ImagenContent[]>;
    amenidades: AmenidadContent[];
    zonasComunes: ZonaComunContent[];
    navegacion: NavItem[];
}

const DEFAULT_SECCIONES_ORDEN = ['hero', 'nosotros', 'proyecto', 'amenidades', 'detalles', 'propiedad'];

const initialState: ContentState = {
    loading: true,
    config: { id: 'default', ...DEFAULT_CONFIG },
    secciones: Object.fromEntries(
        Object.entries(DEFAULT_SECCIONES).map(([k, v]) => [k, { id: `default-${k}`, ...v }])
    ),
    seccionesOrden: DEFAULT_SECCIONES_ORDEN,
    imagenes: {},
    amenidades: DEFAULT_AMENIDADES,
    zonasComunes: DEFAULT_ZONAS,
    navegacion: DEFAULT_NAVEGACION,
};

const ContentContext = createContext<ContentState>(initialState);

// ─── Provider ────────────────────────────────────────────────────────────────

export function ContentProvider({ children }: { children: ReactNode }) {
    const [state, setState] = useState<ContentState>(initialState);

    useEffect(() => {
        const load = async () => {
            const [configs, seccionesRaw, imagenesRaw, amenidadesRaw, zonasRaw, navRaw] =
                await Promise.all([
                    fetchSiteConfig(),
                    fetchSecciones(),
                    fetchImagenes(),
                    fetchAmenidades(),
                    fetchZonasComunes(),
                    fetchNavegacion(),
                ]);

            // Config: merge defaults con primer registro de Airtable
            const config: SiteConfig =
                configs.length > 0
                    ? { ...DEFAULT_CONFIG, ...configs[0] }
                    : { id: 'default', ...DEFAULT_CONFIG };

            // Secciones: keyed por Clave, merge con defaults
            const seccionesMap: Record<string, SeccionContent> = {
                ...Object.fromEntries(
                    Object.entries(DEFAULT_SECCIONES).map(([k, v]) => [k, { id: `default-${k}`, ...v }])
                ),
            };
            const seccionesActivas = seccionesRaw.filter((s) => s.Activo !== false && s.Clave);
            seccionesActivas.forEach((s) => {
                seccionesMap[s.Clave!] = { ...seccionesMap[s.Clave!], ...s };
            });

            // Orden de secciones: preserva el orden de Airtable,
            // añade al final las que solo están en los defaults
            const ordenAirtable = seccionesActivas.map((s) => s.Clave!);
            const seccionesOrden = ordenAirtable.length > 0
                ? [
                    ...ordenAirtable,
                    ...DEFAULT_SECCIONES_ORDEN.filter((c) => !ordenAirtable.includes(c)),
                  ]
                : DEFAULT_SECCIONES_ORDEN;

            // Mapa ID de registro → Clave, para resolver campos de tipo "linked record"
            // (Airtable autovincula el campo Sección si su nombre coincide con una tabla)
            const seccionesIdMap: Record<string, string> = {};
            seccionesRaw.forEach((s) => {
                if (s.id && s.Clave) seccionesIdMap[s.id] = s.Clave;
            });

            // Imagenes: agrupadas por Sección, ordenadas por Orden
            const imagenesMap: Record<string, ImagenContent[]> = {};
            imagenesRaw
                .filter((img) => img.Activo !== false && img.Imagen?.[0])
                .sort((a, b) => (a.Orden ?? 0) - (b.Orden ?? 0))
                .forEach((img) => {
                    // Sección puede llegar como string ("hero") o como array de IDs (["recXXX"])
                    // si Airtable la creó como linked record en vez de texto plano
                    const rawSeccion = img.Sección as unknown;
                    let seccion: string | undefined;
                    if (Array.isArray(rawSeccion)) {
                        seccion = seccionesIdMap[rawSeccion[0]];
                    } else if (typeof rawSeccion === 'string') {
                        seccion = rawSeccion;
                    }
                    if (!seccion) return;
                    if (!imagenesMap[seccion]) imagenesMap[seccion] = [];
                    imagenesMap[seccion].push(img);
                });

            // Amenidades: Airtable o defaults
            const amenidades =
                amenidadesRaw.filter((a) => a.Activo !== false).length > 0
                    ? amenidadesRaw
                          .filter((a) => a.Activo !== false)
                          .sort((a, b) => (a.Orden ?? 0) - (b.Orden ?? 0))
                    : DEFAULT_AMENIDADES;

            // Zonas comunes: Airtable o defaults
            const zonasComunes =
                zonasRaw.filter((z) => z.Activo !== false).length > 0
                    ? zonasRaw
                          .filter((z) => z.Activo !== false)
                          .sort((a, b) => (a.Orden ?? 0) - (b.Orden ?? 0))
                    : DEFAULT_ZONAS;

            // Navegación: Airtable o defaults
            const navegacion =
                navRaw.filter((n) => n.Activo !== false).length > 0
                    ? navRaw
                          .filter((n) => n.Activo !== false)
                          .sort((a, b) => (a.Orden ?? 0) - (b.Orden ?? 0))
                    : DEFAULT_NAVEGACION;

            setState({ loading: false, config, secciones: seccionesMap, seccionesOrden, imagenes: imagenesMap, amenidades, zonasComunes, navegacion });
        };

        load();
    }, []);

    return <ContentContext.Provider value={state}>{children}</ContentContext.Provider>;
}

export const useContent = () => useContext(ContentContext);
