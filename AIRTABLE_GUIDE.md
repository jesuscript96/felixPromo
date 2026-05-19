# Guía de contenidos — NARA Moncada
### Para el equipo de marketing y producto

---

## Cómo funciona

La web de NARA Moncada está conectada en tiempo real a esta base de datos de Airtable. **Cualquier cambio que hagas aquí se refleja en la web al recargar la página** — no hace falta tocar código ni hablar con el equipo técnico.

La base de datos tiene **8 tablas**. Cada una controla una parte de la web:

| Tabla | Qué controla |
|---|---|
| **CONFIGURACION** | Nombre del proyecto, precio, teléfono, horarios, direcciones, URLs de documentos, footer |
| **SECCIONES** | Los textos de cada sección de la web (títulos, párrafos) |
| **IMAGENES** | Todas las imágenes (fondo hero, secciones, carrusel de galería) |
| **AMENIDADES** | Los iconos y nombres del apartado de servicios |
| **ZONAS\_COMUNES** | Las descripciones de cada zona común (piscina, gimnasio…) |
| **NAVEGACION** | Los botones del menú flotante |
| **TIPOLOGÍAS** | Las tipologías de vivienda con planos descargables |
| **UNIDADES** | Cada piso o ático con precio, estado y metros |

---

## Regla de oro

> Si un campo está vacío, la web usa el texto original que tenía por defecto. **Nada se rompe si dejas un campo en blanco.**

---

## Tabla 1 — CONFIGURACION

Esta tabla tiene **un único registro**. Todos sus campos son editables directamente.

### Datos de la promoción

| Campo | Contenido actual | Para qué sirve |
|---|---|---|
| Nombre Promoción | NARA Moncada | Aparece como título principal en la ficha y el footer |
| Tagline Hero | Vanguardia y Diseño… | Texto pequeño en mayúsculas bajo el título del hero |
| Descripción Hero | A un paso del CEU… | Primera línea de texto del hero |
| Subtítulo Hero | 25 Viviendas de 1, 2… | Heading grande del hero |
| Localización | Valencia, España | Botón/píldora de ubicación |
| Precio Desde | 320.000€ | Precio mínimo en la ficha de la promoción |
| Estado Comercialización | EN COMERCIALIZACIÓN | Badge de estado (aparece en verde) |

### Vídeo y visita virtual

| Campo | Instrucciones |
|---|---|
| URL Vídeo | Pega aquí el enlace de YouTube o Vimeo. El botón "Ver vídeo" aparece solo cuando tiene valor. |
| URL Visita Virtual | Pega el enlace de Matterport u similar. El botón "Visita Virtual" aparece solo cuando tiene valor. |

### Documentos descargables

| Campo | Instrucciones |
|---|---|
| URL Dossier | Sube el PDF a Google Drive (con permiso "cualquiera con el enlace") y pega la URL aquí. |
| URL Memoria Calidades | Igual que el dossier. |

Cuando rellenes estos campos, los botones de descarga de la web pasarán de ser decorativos a ser enlaces reales.

### Datos de contacto

| Campo | Contenido actual |
|---|---|
| Teléfono | +34 900 123 456 |
| Dirección Promoción | Moncada |
| CP Promoción | 46113 |
| Ciudad Promoción | Moncada, Valencia |
| Dirección Oficina | Avenida de las Cortes Valencianas 58 |
| CP Oficina | 46015 |
| Ciudad Oficina | Valencia |
| Horario L-V | 10:00h - 14:00h \| 16:30h - 20:00h |
| Horario Sábado | 10:00h - 14:00h |
| Horario Domingo | Cerrado |

### Footer y legal

| Campo | Instrucciones |
|---|---|
| Nombre Marca | Texto grande en el footer (ej. NARA MONCADA) |
| Crédito Footer | Línea pequeña bajo el nombre (ej. by NARA Capital & GOOR.STUDIO) |
| Copyright | Texto del copyright (el año se añade automáticamente) |
| URL Aviso Legal | Enlace del pie de página |
| URL Privacidad | Enlace del pie de página y del formulario de contacto |
| URL Política de Cookies | Enlace del pie de página |

---

## Tabla 2 — SECCIONES

Cada fila es una sección de la web. La columna **Clave** identifica a qué sección corresponde — **no la cambies nunca**.

### Registros existentes

| Clave | Sección en la web |
|---|---|
| `hero` | Pantalla de entrada (hero) |
| `nosotros` | Sección "Sobre nosotros" |
| `proyecto` | Sección "Diseño y Exclusividad" |
| `amenidades` | Sección de amenidades (fondo oscuro con iconos) |
| `detalles` | Sección "Espacios comunes Planta Baja" |
| `propiedad` | Ficha con tipologías, formulario de contacto y mapa |
| `galeria` | (Solo para organización interna de imágenes) |

### Campos disponibles

| Campo | Para qué sirve |
|---|---|
| Etiqueta Superior | Texto pequeño en mayúsculas que aparece sobre el título |
| Título | El heading principal de la sección |
| Subtítulo | Heading secundario (en `propiedad` es el título del formulario) |
| Párrafo 1 | Primer bloque de texto |
| Párrafo 2 | Segundo bloque de texto |
| Párrafo 3 | Tercer bloque de texto |
| Activo | Si está desmarcado, se usa el texto por defecto del código |

### Ejemplo: cómo cambiar el texto de "Sobre nosotros"

1. Abre la tabla **SECCIONES**
2. Busca la fila con Clave = `nosotros`
3. Edita el campo **Párrafo 1** o **Párrafo 2**
4. Guarda y recarga la web

---

## Tabla 3 — IMAGENES

Cada registro es una imagen. El campo **Sección** indica dónde aparece en la web.

### Imágenes actuales

| Nombre | Sección | Imagen |
|---|---|---|
| HeroImage | hero | Render cálido (fondo pantalla principal) |
| Nosotros – Alzado | nosotros | Alzado frontal |
| Proyecto – Fachada | proyecto | Alzado lateral |
| Amenidades – Piscina | amenidades | Piscina (fondo sección amenidades) |
| Detalles – Zonas comunes | detalles | Zonas comunes |
| Galería 1 – Render | galeria | Render interior cálido |
| Galería 2 – Alzado | galeria | Fachada principal |
| Galería 3 – Alzado post. | galeria | Fachada posterior |
| Galería 4 – Patio | galeria | Patio interior |
| Galería 5 – Piscina | galeria | Piscina comunitaria |
| Galería 6 – Gimnasio | galeria | Sala de gimnasio |
| Galería 7 – Terraza | galeria | Terraza tipo |
| Galería 8 – Ático | galeria | Terraza ático |

### Campos

| Campo | Instrucciones |
|---|---|
| Nombre | Nombre descriptivo solo para tu referencia interna |
| Sección | A qué parte de la web va. Vincula al registro de SECCIONES con la clave correspondiente |
| Imagen | **Aquí se sube la foto.** Haz clic en el campo y arrastra o selecciona el archivo |
| Texto Alt | Descripción breve de la imagen (mejora el SEO y la accesibilidad) |
| Orden | Número que define el orden de aparición. Importante en la galería (1 aparece primero) |
| Activo | Desmarca para ocultar la imagen sin borrarla |

### Cómo cambiar una imagen de sección

1. Abre **IMAGENES**
2. Busca el registro por su nombre (ej. "HeroImage" para el fondo del hero)
3. Haz clic en el campo **Imagen**
4. Borra el archivo actual y sube el nuevo
5. Recarga la web

### Cómo añadir una imagen al carrusel

1. Abre **IMAGENES**
2. Haz clic en **+ Crear nuevo**
3. Rellena:
   - **Nombre**: lo que quieras (ej. "Galería 9 – Salón")
   - **Sección**: vincula al registro con Clave = `galeria`
   - **Imagen**: sube el archivo
   - **Orden**: el número que ocupa en el carrusel (ej. 9)
   - **Activo**: marcado ✓
4. Recarga la web y aparecerá en el carrusel

### Cómo quitar una imagen del carrusel sin borrarla

1. Busca el registro en **IMAGENES**
2. Desmarca el campo **Activo**
3. La imagen desaparece de la web pero el registro sigue guardado

---

## Tabla 4 — AMENIDADES

Controla el grid de servicios de la sección con fondo oscuro.

### Registros actuales

| Nombre | Icono |
|---|---|
| Piscina | sun |
| Gimnasio | dumbbell |
| Sala Polivalente | building |
| Garajes y Trasteros | car |

### Iconos disponibles

Escribe exactamente uno de estos valores en el campo **Icono**:

| Valor | Icono que muestra |
|---|---|
| `sun` | Sol — para piscina, zonas exteriores |
| `dumbbell` | Mancuerna — para gimnasio |
| `building` | Edificio — para salas |
| `car` | Coche — para garajes y parking |
| `waves` | Olas — para spa o zona acuática |
| `bike` | Bicicleta — para carril bici o zona deportiva |
| `trees` | Árboles — para jardines o zonas verdes |
| `shield` | Escudo — para seguridad o vigilancia |
| `coffee` | Taza — para cafetería o coworking |
| `wifi` | WiFi — para zonas conectadas |

### Cómo añadir una nueva amenidad

1. Abre **AMENIDADES**
2. Crea un nuevo registro
3. Rellena **Nombre**, **Icono** (uno de los valores de arriba) y **Orden**
4. Marca **Activo** ✓
5. Recarga la web

### Cómo reordenar las amenidades

Cambia el número del campo **Orden** en cada registro. El valor más bajo aparece primero.

---

## Tabla 5 — ZONAS\_COMUNES

Controla la lista de zonas comunes con sus descripciones detalladas.

### Registros actuales

| Nombre | Descripción (resumida) |
|---|---|
| Piscina Comunitaria | Zona de baño exclusiva… |
| Gimnasio | Zonas deportivas equipadas… |
| Sala Polivalente | Espacio flexible para ocio… |
| Trasteros y Garajes | 25 plazas de aparcamiento… |

### Campos

| Campo | Instrucciones |
|---|---|
| Nombre | Título de la zona que aparece en negrita |
| Descripción | Texto completo que aparece bajo el título |
| Orden | Orden de aparición (1 sale primero) |
| Activo | Desmarca para ocultar |

---

## Tabla 6 — NAVEGACION

Controla los botones del menú flotante que aparece al hacer scroll.

### Registros actuales

| Etiqueta | ID Sección | Orden |
|---|---|---|
| INICIO | inicio | 1 |
| NOSOTROS | nosotros | 2 |
| PROYECTO | proyecto | 3 |
| PROMOCIÓN | promocion | 4 |
| CONTACTO | contacto | 5 |

> **Importante:** El campo **ID Sección** debe coincidir exactamente con el ID de la sección HTML en el código. No cambies estos valores sin consultarlo con el equipo técnico.

---

## Tablas 7 y 8 — TIPOLOGÍAS y UNIDADES

Estas tablas controlan la tabla de precios y disponibilidad de la ficha.

### TIPOLOGÍAS — qué editar

| Campo | Para qué sirve |
|---|---|
| Nombre | Nombre de la tipología (ej. "Tipo A – 1 Dormitorio") |
| Uds. Totales | Número de unidades de esa tipología |
| Rango Tamaño | Texto con el rango de m² (ej. "65 – 80 m²") |
| Zonas Comunes | Qué zonas comunes incluye |
| Planos de Tipología | Sube aquí el PDF del plano — aparecerá como enlace de descarga |

### UNIDADES — qué editar

| Campo | Para qué sirve |
|---|---|
| Referencia | Código del piso (ej. "A-101") |
| Tipología | Vincula al registro de TIPOLOGÍAS correspondiente |
| Planta | Número de planta |
| Habitaciones | Número de habitaciones |
| m² Construidos | Metros cuadrados construidos |
| m² Terraza | Metros de terraza (dejar vacío si no tiene) |
| Precio de Venta (PVP) | Precio en euros, solo el número (ej. 320000) |
| Estado | `Disponible` → verde / `Reservado` → amarillo / cualquier otro → rojo |

### Cambiar el estado de un piso

1. Abre **UNIDADES**
2. Busca la unidad por su **Referencia**
3. Cambia el campo **Estado** a `Reservado` o el valor que corresponda
4. Recarga la web — el badge de color cambia automáticamente

---

## Flujos de trabajo habituales

### "Quiero cambiar el precio de salida"

1. Abre **CONFIGURACION**
2. Edita el campo **Precio Desde** (ej. "desde 295.000€")
3. Recarga la web

### "Quiero subir el dossier en PDF"

1. Sube el PDF a Google Drive y copia el enlace compartido (acceso "cualquiera con el enlace")
2. Abre **CONFIGURACION**
3. Pega la URL en el campo **URL Dossier**
4. Recarga la web — el botón de descarga se activa automáticamente

### "Quiero añadir un render nuevo al carrusel"

1. Abre **IMAGENES**
2. Crea un nuevo registro
3. Campo **Sección**: vincula al registro con Clave = `galeria`
4. Campo **Imagen**: sube el render
5. Campo **Orden**: pon el número que quieras (ej. 9 para que vaya al final)
6. Marca **Activo** ✓
7. Recarga la web

### "Quiero marcar un piso como vendido"

1. Abre **UNIDADES**
2. Encuentra el piso por su **Referencia**
3. Cambia **Estado** a `Vendido`
4. Recarga la web — aparece con badge rojo

### "Quiero añadir el vídeo del proyecto"

1. Sube el vídeo a YouTube o Vimeo y copia la URL
2. Abre **CONFIGURACION**
3. Pega la URL en **URL Vídeo**
4. Recarga la web — aparece el botón "Ver vídeo" sobre el carrusel

### "Quiero cambiar el teléfono de contacto"

1. Abre **CONFIGURACION**
2. Edita el campo **Teléfono**
3. Recarga la web

---

## Notas técnicas importantes

- **Imágenes**: el formato recomendado es JPG o PNG, máximo 5 MB por archivo para una buena velocidad de carga. Las imágenes se sirven desde los servidores de Airtable.
- **Orden**: no tiene que ser consecutivo. Puedes usar 10, 20, 30… para dejar espacio a inserciones futuras sin tener que renumerar todo.
- **Campo Activo desmarcado**: el registro se ignora y la web usa el valor por defecto. Nunca borra nada — solo lo oculta.
- **Sección del campo Imagen**: siempre vincula a un registro de la tabla SECCIONES. Si no ves la opción correcta en el desplegable, busca por la Clave (hero, nosotros, proyecto…).
- **Cambios en tiempo real**: los cambios son visibles al recargar la web. No hay caché ni demoras.

---

## Contacto técnico

Para cambios estructurales (nuevas secciones, nuevos campos, cambios de diseño), contacta con el equipo de desarrollo.
