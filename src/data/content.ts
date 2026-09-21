// AUTO-GENERADO por scripts/import-airtable-csv.mjs desde los CSV de Airtable — NO EDITAR A MANO.
// Regenerar: exporta los CSV a airtable-export/ y ejecuta `node scripts/import-airtable-csv.mjs`
// Generado: 2026-09-21T13:40:08.079Z
import type {
  SiteConfig, SeccionContent, ImagenContent, AmenidadContent,
  ZonaComunContent, NavItem, Typology, Unit,
} from '../services/airtable';

export const STATIC_CONFIG: SiteConfig = {
  "id": "config",
  "Nombre Promoción": "NARA Moncada",
  "Tagline Hero": "Vanguardia y Diseño en el eje norte de Valencia",
  "Descripción Hero": "A un paso del CEU y a 20 minutos de Valencia",
  "Subtítulo Hero": "26 Viviendas de 1, 2, 3 dormitorios y Áticos",
  "Localización": "9 C. Callizo de Masarrochos Moncada, Comunidad Valenciana",
  "Precio Desde": "185.000€",
  "Estado Comercialización": "EN COMERCIALIZACIÓN",
  "Teléfono": "+34 900 123 456",
  "Dirección Promoción": "9 C. Callizo de Masarrochos Moncada, Comunidad Valenciana",
  "CP Promoción": "46113",
  "Ciudad Promoción": "Moncada, Valencia",
  "Dirección Oficina": "Avenida de las Cortes Valencianas 58",
  "CP Oficina": "46015",
  "Ciudad Oficina": "Valencia",
  "Horario L-V": "10:00h - 14:00h | 16:30h - 20:00h",
  "Horario Sábado": "10:00h - 14:00h",
  "Horario Domingo": "Cerrado",
  "Nombre Marca": "NARA MONCADA",
  "Crédito Footer": "by NARA Capital & GOOR.STUDIO",
  "Copyright": "NARA Capital. Todos los derechos reservados.",
  "URL_maps": "https://maps.app.goo.gl/uet3nmXbis68w5GY6",
  "geolocalizacion": "39°32'35.5\"N 0°23'57.5\"W"
};

export const STATIC_SECCIONES: SeccionContent[] = [
  {
    "id": "eero",
    "Clave": "eero"
  },
  {
    "id": "hero",
    "Clave": "hero",
    "Título": "xx",
    "Etiqueta Superior": "Promoción",
    "Activo": true
  },
  {
    "id": "nosotros",
    "Clave": "nosotros",
    "Título": "Moncada",
    "Párrafo 1": "En NARA Capital creemos en espacios pensados para vivir con calma, luz y equilibrio. Moncada combina la tranquilidad de una zona residencial consolidada con una ubicación junto a la huerta valenciana, la cercanía a Valencia y todos los servicios del día a día. A pocos minutos de la ciudad, ofrece una forma de vida cómoda y conectada: comercios, zonas verdes, restauración, metro y acceso rápido a los principales puntos del área metropolitana.",
    "Párrafo 2": "La proximidad a la \nUniversidad CEU Cardenal Herrera aporta además dinamismo, vida y una identidad propia a la zona, convirtiéndola en un entorno moderno y en constante evolución. NARA Moncada nace para integrarse en ese estilo de vida: arquitectura contemporánea, materiales cálidos y viviendas diseñadas para disfrutar de la luz, el entorno y las vistas abiertas a la huerta.",
    "Etiqueta Superior": "La zona",
    "Activo": true
  },
  {
    "id": "proyecto",
    "Clave": "proyecto",
    "Título": "Diseño y Exclusividad",
    "Párrafo 2": "Universidad CEU Cardenal Herrera aporta además dinamismo, vida y una identidad propia a la zona, convirtiéndola en un entorno moderno y en constante evolución. NARA Moncada nace para integrarse en ese estilo de vida: arquitectura contemporánea, materiales cálidos y viviendas diseñadas para disfrutar de la luz, el entorno y las vistas abiertas a la huerta.",
    "Párrafo 3": "El residencial comparte un diseño arquitectónico exclusivo, garantizando luz natural en los ~2,160 m² de superficie construida.",
    "Activo": true
  },
  {
    "id": "amenidades",
    "Clave": "amenidades",
    "Título": "Un lugar donde crecer, conectar y vivir experiencias",
    "Párrafo 1": "A pocos minutos de la ciudad, pegado a la huerta Valenciana, \nMoncada ofrece una forma de vida cómoda y conectada: comercios, zonas verdes, restauración, metro y acceso rápido a los principales puntos del área metropolitana.",
    "Activo": true
  },
  {
    "id": "detalles",
    "Clave": "detalles",
    "Título": "Espacios comunes Planta Baja",
    "Activo": true
  },
  {
    "id": "propiedad",
    "Clave": "propiedad",
    "Título": "Tipologías de viviendas",
    "Subtítulo": "¿Estás interesado?",
    "Párrafo 1": "Déjanos tus datos y nos pondremos en contacto contigo lo antes posible.",
    "Etiqueta Superior": "Ubicación de la promoción",
    "Activo": true
  },
  {
    "id": "galeria",
    "Clave": "galeria",
    "Título": "Galería de imágenes",
    "Activo": true
  }
];

export const STATIC_IMAGENES: ImagenContent[] = [
  {
    "id": "HeroImage",
    "Nombre": "HeroImage",
    "Sección": "hero",
    "Imagen": [
      {
        "id": "att-1",
        "filename": "Render_cálido.png",
        "url": "/attachments/Render_c%C3%A1lido.png",
        "size": 0,
        "type": ""
      }
    ],
    "Activo": true
  },
  {
    "id": "Nosotros – Alzado",
    "Nombre": "Nosotros – Alzado",
    "Sección": "nosotros",
    "Imagen": [
      {
        "id": "att-2",
        "filename": "09_-_Patio_con_huerta.png",
        "url": "/attachments/09_-_Patio_con_huerta.png",
        "size": 0,
        "type": ""
      }
    ],
    "Orden": 1,
    "Activo": true
  },
  {
    "id": "Arquitectura contemporánea",
    "Nombre": "Arquitectura contemporánea",
    "Sección": "proyecto",
    "Imagen": [
      {
        "id": "att-3",
        "filename": "13_-_Alzado_posteior.png",
        "url": "/attachments/13_-_Alzado_posteior.png",
        "size": 0,
        "type": ""
      }
    ],
    "Texto Alt": "Diseño actual, líneas limpias y una estética pensada para perdurar.",
    "Orden": 1,
    "Activo": true
  },
  {
    "id": "Un nuevo residencial en Moncada",
    "Nombre": "Un nuevo residencial en Moncada",
    "Sección": "proyecto",
    "Imagen": [
      {
        "id": "att-4",
        "filename": "12_-_Alzado_fachada_ext._(raw).png",
        "url": "/attachments/12_-_Alzado_fachada_ext._(raw).png",
        "size": 0,
        "type": ""
      }
    ],
    "Texto Alt": "Viviendas de obra nueva con garaje, trastero y zonas comunes.",
    "Orden": 1,
    "Activo": true
  },
  {
    "id": "Terrazas y luz natural",
    "Nombre": "Terrazas y luz natural",
    "Sección": "proyecto",
    "Imagen": [
      {
        "id": "att-5",
        "filename": "02_-_Atico_terraza_(raw).png",
        "url": "/attachments/02_-_Atico_terraza_(raw).png",
        "size": 0,
        "type": ""
      }
    ],
    "Texto Alt": "Espacios exteriores privados para disfrutar de la tranquilidad.",
    "Orden": 1,
    "Activo": true
  },
  {
    "id": "Viviendas pensadas para vivir",
    "Nombre": "Viviendas pensadas para vivir",
    "Sección": "proyecto",
    "Imagen": [
      {
        "id": "att-6",
        "filename": "01_-_Vivienda_tipo_terraza_detras.png",
        "url": "/attachments/01_-_Vivienda_tipo_terraza_detras.png",
        "size": 0,
        "type": ""
      }
    ],
    "Texto Alt": "Distribuciones funcionales, acabados de calidad y máximo aprovechamiento del espacio.",
    "Orden": 1,
    "Activo": true
  },
  {
    "id": "Zonas comunes exclusivas",
    "Nombre": "Zonas comunes exclusivas",
    "Sección": "proyecto",
    "Imagen": [
      {
        "id": "att-7",
        "filename": "10_-_Gimnasio.png",
        "url": "/attachments/10_-_Gimnasio.png",
        "size": 0,
        "type": ""
      }
    ],
    "Texto Alt": "Gimnasio, piscina y espacios pensados para mejorar el día a día.",
    "Activo": true
  },
  {
    "id": "Amenidades – Piscina",
    "Nombre": "Amenidades – Piscina",
    "Sección": "amenidades",
    "Imagen": [
      {
        "id": "att-8",
        "filename": "04_Piscina.png",
        "url": "/attachments/04_Piscina.png",
        "size": 0,
        "type": ""
      }
    ],
    "Texto Alt": "Piscina comunitaria NARA Moncada",
    "Orden": 1,
    "Activo": true
  },
  {
    "id": "Detalles – Zonas comunes",
    "Nombre": "Detalles – Zonas comunes",
    "Sección": "detalles",
    "Imagen": [
      {
        "id": "att-9",
        "filename": "14_-_Patio_hero.png",
        "url": "/attachments/14_-_Patio_hero.png",
        "size": 0,
        "type": ""
      }
    ],
    "Texto Alt": "Zonas comunes planta baja",
    "Orden": 1,
    "Activo": true
  },
  {
    "id": "Galería 1 – Render",
    "Nombre": "Galería 1 – Render",
    "Sección": "galeria",
    "Imagen": [
      {
        "id": "att-10",
        "filename": "Render_cálido.png",
        "url": "/attachments/Render_c%C3%A1lido.png",
        "size": 0,
        "type": ""
      }
    ],
    "Texto Alt": "Interior NARA Moncada",
    "Orden": 1,
    "Activo": true
  },
  {
    "id": "Galería 2 – Alzado",
    "Nombre": "Galería 2 – Alzado",
    "Sección": "galeria",
    "Imagen": [
      {
        "id": "att-11",
        "filename": "12_-_Alzado_fachada_ext._(raw).png",
        "url": "/attachments/12_-_Alzado_fachada_ext._(raw).png",
        "size": 0,
        "type": ""
      }
    ],
    "Texto Alt": "Fachada principal",
    "Orden": 2,
    "Activo": true
  },
  {
    "id": "Galería 3 – Alzado post.",
    "Nombre": "Galería 3 – Alzado post.",
    "Sección": "galeria",
    "Imagen": [
      {
        "id": "att-12",
        "filename": "13_-_Alzado_posteior.png",
        "url": "/attachments/13_-_Alzado_posteior.png",
        "size": 0,
        "type": ""
      }
    ],
    "Texto Alt": "Fachada posterior",
    "Orden": 3,
    "Activo": true
  },
  {
    "id": "Galería 4 – Patio",
    "Nombre": "Galería 4 – Patio",
    "Sección": "galeria",
    "Imagen": [
      {
        "id": "att-13",
        "filename": "14_-_Patio_hero.png",
        "url": "/attachments/14_-_Patio_hero.png",
        "size": 0,
        "type": ""
      }
    ],
    "Texto Alt": "Patio interior",
    "Orden": 4,
    "Activo": true
  },
  {
    "id": "Galería 5 – Salón, cocina, comedor",
    "Nombre": "Galería 5 – Salón, cocina, comedor",
    "Sección": "galeria",
    "Imagen": [
      {
        "id": "att-14",
        "filename": "08_-_Atico_salon_comedor_cocina.png",
        "url": "/attachments/08_-_Atico_salon_comedor_cocina.png",
        "size": 0,
        "type": ""
      }
    ],
    "Texto Alt": "Piscina comunitaria",
    "Orden": 5,
    "Activo": true
  },
  {
    "id": "Galería 6 – Cocina, comedor",
    "Nombre": "Galería 6 – Cocina, comedor",
    "Sección": "galeria",
    "Imagen": [
      {
        "id": "att-15",
        "filename": "06_-_Salon_cocina_terraza_detras.png",
        "url": "/attachments/06_-_Salon_cocina_terraza_detras.png",
        "size": 0,
        "type": ""
      }
    ],
    "Texto Alt": "Sala de gimnasio",
    "Orden": 6,
    "Activo": true
  },
  {
    "id": "Galería 7 – Dormitorio",
    "Nombre": "Galería 7 – Dormitorio",
    "Sección": "galeria",
    "Imagen": [
      {
        "id": "att-16",
        "filename": "05_-_Dormitorio.png",
        "url": "/attachments/05_-_Dormitorio.png",
        "size": 0,
        "type": ""
      }
    ],
    "Texto Alt": "Terraza tipo",
    "Orden": 7,
    "Activo": true
  },
  {
    "id": "Galería 8 – Baño",
    "Nombre": "Galería 8 – Baño",
    "Sección": "galeria",
    "Imagen": [
      {
        "id": "att-17",
        "filename": "04_-_Baño.png",
        "url": "/attachments/04_-_Ba%C3%B1o.png",
        "size": 0,
        "type": ""
      }
    ],
    "Texto Alt": "Terraza ático",
    "Orden": 8,
    "Activo": true
  }
];

export const STATIC_AMENIDADES: AmenidadContent[] = [
  {
    "id": "Piscina",
    "Nombre": "Piscina",
    "Icono": "sun",
    "Orden": 1,
    "Activo": true
  },
  {
    "id": "Gimnasio",
    "Nombre": "Gimnasio",
    "Icono": "dumbbell",
    "Orden": 2,
    "Activo": true
  },
  {
    "id": "Sala Polivalente",
    "Nombre": "Sala Polivalente",
    "Icono": "building",
    "Orden": 3,
    "Activo": true
  },
  {
    "id": "Garajes y Trasteros",
    "Nombre": "Garajes y Trasteros",
    "Icono": "car",
    "Orden": 4,
    "Activo": true
  }
];

export const STATIC_ZONAS_COMUNES: ZonaComunContent[] = [
  {
    "id": "Piscina Comunitaria",
    "Nombre": "Piscina Comunitaria",
    "Descripción": "Disfruta de una zona de baño exclusiva, ideal para refrescarse y relajarse bajo el clima soleado de Valencia, todo dentro del recinto.",
    "Orden": 1,
    "Activo": true
  },
  {
    "id": "Gimnasio",
    "Nombre": "Gimnasio",
    "Descripción": "Zonas deportivas equipadas para mantener un estilo de vida activo y saludable sin tener que salir del edificio.",
    "Orden": 2,
    "Activo": true
  },
  {
    "id": "Sala Polivalente",
    "Nombre": "Sala Polivalente",
    "Descripción": "Un espacio flexible y acogedor pensado para el ocio, reuniones de la comunidad, y celebraciones, potenciando la vida compartida.",
    "Orden": 3,
    "Activo": true
  },
  {
    "id": "Trasteros y Garajes",
    "Nombre": "Trasteros y Garajes",
    "Descripción": "26 plazas de aparcamiento y trasteros privados, incluidos en el precio, \nofreciendo la máxima comodidad y seguridad en tu día a día.",
    "Orden": 4,
    "Activo": true
  }
];

export const STATIC_NAVEGACION: NavItem[] = [
  {
    "id": "INICIO",
    "Etiqueta": "INICIO",
    "ID Sección": "inicio",
    "Orden": 1,
    "Activo": true
  },
  {
    "id": "MONCADA",
    "Etiqueta": "MONCADA",
    "ID Sección": "nosotros",
    "Orden": 2,
    "Activo": true
  },
  {
    "id": "PROYECTO",
    "Etiqueta": "PROYECTO",
    "ID Sección": "proyecto",
    "Orden": 3,
    "Activo": true
  },
  {
    "id": "PROMOCIÓN",
    "Etiqueta": "PROMOCIÓN",
    "ID Sección": "promocion",
    "Orden": 4,
    "Activo": true
  },
  {
    "id": "CONTACTO",
    "Etiqueta": "CONTACTO",
    "ID Sección": "contacto",
    "Orden": 5,
    "Activo": true
  }
];

export const STATIC_TIPOLOGIAS: Typology[] = [
  {
    "id": "5",
    "Nombre": "Estudio",
    "Uds. Totales": 2,
    "Rango Tamaño": "47-50 m2",
    "Zonas Comunes": "Piscina, gimnasio y sala polivalente.",
    "Incluye": "Garaje y trastero"
  },
  {
    "id": "6",
    "Nombre": "1 Dormitorio",
    "Uds. Totales": 10,
    "Rango Tamaño": "50-65 m2",
    "Zonas Comunes": "Piscina, gimnasio y sala polivalente.",
    "Incluye": "Garaje y trastero"
  },
  {
    "id": "7",
    "Nombre": "2 Dormitorios",
    "Uds. Totales": 10,
    "Rango Tamaño": "79-105 m2",
    "Zonas Comunes": "Piscina, gimnasio y sala polivalente.",
    "Incluye": "Garaje y trastero"
  },
  {
    "id": "8",
    "Nombre": "3 Dormitorios",
    "Uds. Totales": 4,
    "Rango Tamaño": "104-115 m2",
    "Zonas Comunes": "Piscina, gimnasio y sala polivalente.",
    "Incluye": "Garaje y trastero"
  },
  {
    "id": "9",
    "Nombre": "Aticos",
    "Uds. Totales": 5,
    "Rango Tamaño": "47-104 m2",
    "Zonas Comunes": "Piscina, gimnasio y sala polivalente.",
    "Incluye": "Garaje y trastero"
  }
];

export const STATIC_UNIDADES: Unit[] = [
  {
    "id": "VIV. 1",
    "Referencia": "VIV. 1",
    "Tipología": [
      "6"
    ],
    "Planta": "PB",
    "Habitaciones": 1,
    "m² Construidos": 63,
    "m² Terraza": 9,
    "Precio de Venta (PVP)": 216000,
    "Estado": "Disponible",
    "Documentación": [
      {
        "id": "att-18",
        "filename": "Planos_comercialización.pdf",
        "url": "/attachments/Planos_comercializaci%C3%B3n.pdf",
        "size": 0,
        "type": ""
      }
    ]
  },
  {
    "id": "VIV. 2",
    "Referencia": "VIV. 2",
    "Tipología": [
      "6"
    ],
    "Planta": "PB",
    "Habitaciones": 1,
    "m² Construidos": 59,
    "m² Terraza": 8,
    "Precio de Venta (PVP)": 206000,
    "Estado": "Disponible"
  },
  {
    "id": "VIV. 3",
    "Referencia": "VIV. 3",
    "Tipología": [
      "6"
    ],
    "Planta": "PB",
    "Habitaciones": 1,
    "m² Construidos": 59,
    "m² Terraza": 8,
    "Precio de Venta (PVP)": 206000,
    "Estado": "Reservado"
  },
  {
    "id": "VIV. 4",
    "Referencia": "VIV. 4",
    "Tipología": [
      "5"
    ],
    "Planta": "PB",
    "Habitaciones": 1,
    "m² Construidos": 50,
    "m² Terraza": 4,
    "Precio de Venta (PVP)": 177000,
    "Estado": "Reservado"
  },
  {
    "id": "VIV. 5",
    "Referencia": "VIV. 5",
    "Tipología": [
      "6"
    ],
    "Planta": "PB",
    "Habitaciones": 1,
    "m² Construidos": 56,
    "m² Terraza": 8,
    "Precio de Venta (PVP)": 198000,
    "Estado": "Reservado"
  },
  {
    "id": "VIV. 6",
    "Referencia": "VIV. 6",
    "Tipología": [
      "6"
    ],
    "Planta": "PB",
    "Habitaciones": 1,
    "m² Construidos": 64,
    "m² Terraza": 8,
    "Precio de Venta (PVP)": 219000,
    "Estado": "Reservado"
  },
  {
    "id": "VIV. 7",
    "Referencia": "VIV. 7",
    "Tipología": [
      "8"
    ],
    "Planta": "P1",
    "Habitaciones": 3,
    "m² Construidos": 115,
    "m² Terraza": 7,
    "Precio de Venta (PVP)": 336000,
    "Estado": "Reservado"
  },
  {
    "id": "VIV. 8",
    "Referencia": "VIV. 8",
    "Tipología": [
      "7"
    ],
    "Planta": "P1",
    "Habitaciones": 2,
    "m² Construidos": 79,
    "m² Terraza": 4,
    "Precio de Venta (PVP)": 258000,
    "Estado": "Reservado"
  },
  {
    "id": "VIV. 9",
    "Referencia": "VIV. 9",
    "Tipología": [
      "6"
    ],
    "Planta": "P1",
    "Habitaciones": 1,
    "m² Construidos": 65,
    "m² Terraza": 5,
    "Precio de Venta (PVP)": 223000,
    "Estado": "Reservado"
  },
  {
    "id": "VIV. 10",
    "Referencia": "VIV. 10",
    "Tipología": [
      "7"
    ],
    "Planta": "P1",
    "Habitaciones": 2,
    "m² Construidos": 80,
    "m² Terraza": 4,
    "Precio de Venta (PVP)": 260000,
    "Estado": "Disponible"
  },
  {
    "id": "VIV. 11",
    "Referencia": "VIV. 11",
    "Tipología": [
      "7"
    ],
    "Planta": "P1",
    "Habitaciones": 2,
    "m² Construidos": 105,
    "m² Terraza": 35,
    "Precio de Venta (PVP)": 300000,
    "Estado": "Reservado",
    "Reservado": true
  },
  {
    "id": "VIV. 12",
    "Referencia": "VIV. 12",
    "Tipología": [
      "8"
    ],
    "Planta": "P2",
    "Habitaciones": 3,
    "m² Construidos": 115,
    "m² Terraza": 7,
    "Precio de Venta (PVP)": 342000,
    "Estado": "Disponible"
  },
  {
    "id": "VIV. 13",
    "Referencia": "VIV. 13",
    "Tipología": [
      "7"
    ],
    "Planta": "P2",
    "Habitaciones": 2,
    "m² Construidos": 79,
    "m² Terraza": 4,
    "Precio de Venta (PVP)": 270000,
    "Estado": "Reservado"
  },
  {
    "id": "VIV. 14",
    "Referencia": "VIV. 14",
    "Tipología": [
      "6"
    ],
    "Planta": "P2",
    "Habitaciones": 1,
    "m² Construidos": 65,
    "m² Terraza": 5,
    "Precio de Venta (PVP)": 231000,
    "Estado": "Disponible"
  },
  {
    "id": "VIV. 15",
    "Referencia": "VIV. 15",
    "Tipología": [
      "7"
    ],
    "Planta": "P2",
    "Habitaciones": 2,
    "m² Construidos": 80,
    "m² Terraza": 4,
    "Precio de Venta (PVP)": 272000,
    "Estado": "Reservado"
  },
  {
    "id": "VIV. 16",
    "Referencia": "VIV. 16",
    "Tipología": [
      "7"
    ],
    "Planta": "P2",
    "Habitaciones": 2,
    "m² Construidos": 105,
    "m² Terraza": 10,
    "Precio de Venta (PVP)": 318000,
    "Estado": "Disponible"
  },
  {
    "id": "VIV. 17",
    "Referencia": "VIV. 17",
    "Tipología": [
      "8"
    ],
    "Planta": "P3",
    "Habitaciones": 3,
    "m² Construidos": 115,
    "m² Terraza": 7,
    "Precio de Venta (PVP)": 387000,
    "Estado": "Reservado"
  },
  {
    "id": "VIV. 18",
    "Referencia": "VIV. 18",
    "Tipología": [
      "7"
    ],
    "Planta": "P3",
    "Habitaciones": 2,
    "m² Construidos": 79,
    "m² Terraza": 4,
    "Precio de Venta (PVP)": 288000,
    "Estado": "Reservado"
  },
  {
    "id": "VIV. 19",
    "Referencia": "VIV. 19",
    "Tipología": [
      "6"
    ],
    "Planta": "P3",
    "Habitaciones": 1,
    "m² Construidos": 65,
    "m² Terraza": 5,
    "Precio de Venta (PVP)": 228000,
    "Estado": "Reservado"
  },
  {
    "id": "VIV. 20",
    "Referencia": "VIV. 20",
    "Tipología": [
      "7"
    ],
    "Planta": "P3",
    "Habitaciones": 2,
    "m² Construidos": 80,
    "m² Terraza": 4,
    "Precio de Venta (PVP)": 276000,
    "Estado": "Disponible"
  },
  {
    "id": "VIV. 21",
    "Referencia": "VIV. 21",
    "Tipología": [
      "7"
    ],
    "Planta": "P3",
    "Habitaciones": 2,
    "m² Construidos": 105,
    "m² Terraza": 10,
    "Precio de Venta (PVP)": 318000,
    "Estado": "Reservado"
  },
  {
    "id": "VIV. 22",
    "Referencia": "VIV. 22",
    "Tipología": [
      "8",
      "9"
    ],
    "Planta": "Ático",
    "Habitaciones": 3,
    "m² Construidos": 104,
    "m² Terraza": 17,
    "Precio de Venta (PVP)": 394000,
    "Estado": "Disponible"
  },
  {
    "id": "VIV. 23",
    "Referencia": "VIV. 23",
    "Tipología": [
      "5",
      "9"
    ],
    "Planta": "Ático",
    "Habitaciones": 1,
    "m² Construidos": 47,
    "m² Terraza": 8,
    "Precio de Venta (PVP)": 220000,
    "Estado": "Disponible"
  },
  {
    "id": "VIV. 24",
    "Referencia": "VIV. 24",
    "Tipología": [
      "6",
      "9"
    ],
    "Planta": "Ático",
    "Habitaciones": 1,
    "m² Construidos": 54,
    "m² Terraza": 11,
    "Precio de Venta (PVP)": 252000,
    "Estado": "Reservado"
  },
  {
    "id": "VIV. 25",
    "Referencia": "VIV. 25",
    "Tipología": [
      "6",
      "9"
    ],
    "Planta": "Ático",
    "Habitaciones": 1,
    "m² Construidos": 48,
    "m² Terraza": 9,
    "Precio de Venta (PVP)": 242000,
    "Estado": "Reservado"
  },
  {
    "id": "VIV. 26",
    "Referencia": "VIV. 26",
    "Tipología": [
      "7",
      "9"
    ],
    "Planta": "Ático",
    "Habitaciones": 2,
    "m² Construidos": 91,
    "m² Terraza": 20,
    "Precio de Venta (PVP)": 365000,
    "Estado": "Reservado"
  }
];
