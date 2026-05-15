# Guía Airtable CMS — NARA Moncada
*Para el Product Manager / Equipo de Contenidos*

---

## ¿Qué puedes gestionar desde Airtable?

**Todo.** Textos, imágenes, amenidades, zonas comunes, menú de navegación, datos de contacto, precios, horarios, enlaces legales y ficheros descargables. La web se actualiza automáticamente al recargar la página.

---

## Estructura de tablas

La base de datos tiene **8 tablas** en total:

| Tabla | Para qué sirve |
|---|---|
| `CONFIGURACION` | Datos globales del site (1 único registro) |
| `SECCIONES` | Copys de cada sección de la web |
| `IMAGENES` | Biblioteca de imágenes organizada por sección |
| `AMENIDADES` | Lista de servicios/amenidades |
| `ZONAS_COMUNES` | Descripción de zonas comunes con detalle |
| `NAVEGACION` | Ítems del menú flotante |
| `TIPOLOGÍAS` | Tipologías de viviendas *(ya existía)* |
| `UNIDADES` | Unidades disponibles con precios *(ya existía)* |

---

## Tabla 1 — CONFIGURACION

> Solo hay **un registro** en esta tabla. Edita sus campos directamente.

| Campo | Tipo | Ejemplo | Para qué sirve |
|---|---|---|---|
| Nombre Promoción | Texto corto | `NARA Moncada` | Nombre del proyecto en toda la web |
| Tagline Hero | Texto corto | `Vanguardia y Diseño en el eje norte de Valencia` | Línea pequeña bajo el título principal |
| Descripción Hero | Texto corto | `A un paso del CEU y a 20 minutos de Valencia` | Subtexto del hero |
| Subtítulo Hero | Texto corto | `25 Viviendas de 1, 2 dormitorios y Áticos` | Heading secundario del hero |
| Localización | Texto corto | `Valencia, España` | Botón/píldora de ubicación en el hero |
| Precio Desde | Texto corto | `320.000€` | Precio mínimo mostrado en la ficha |
| Estado Comercialización | Texto corto | `EN COMERCIALIZACIÓN` | Badge de estado |
| URL Vídeo | URL | `https://youtube.com/...` | Si rellenas, aparece el botón "Ver vídeo" |
| URL Visita Virtual | URL | `https://matterport.com/...` | Si rellenas, aparece el botón "Visita Virtual" |
| Teléfono | Texto corto | `+34 900 123 456` | Teléfono de la oficina de ventas |
| Dirección Promoción | Texto corto | `Calle Ejemplo, 12` | Dirección del inmueble |
| CP Promoción | Texto corto | `46113` | Código postal del inmueble |
| Ciudad Promoción | Texto corto | `Moncada, Valencia` | Ciudad del inmueble |
| Dirección Oficina | Texto corto | `Avenida de las Cortes Valencianas 58` | Dirección de la oficina de ventas |
| CP Oficina | Texto corto | `46015` | CP de la oficina |
| Ciudad Oficina | Texto corto | `Valencia` | Ciudad de la oficina |
| Horario L-V | Texto corto | `10:00h - 14:00h | 16:30h - 20:00h` | Horario de lunes a viernes |
| Horario Sábado | Texto corto | `10:00h - 14:00h` | Horario del sábado |
| Horario Domingo | Texto corto | `Cerrado` | Horario del domingo |
| URL Dossier | URL | `https://drive.google.com/...` | Enlace al PDF del dossier descargable |
| URL Memoria Calidades | URL | `https://drive.google.com/...` | Enlace a la memoria de calidades |
| URL Aviso Legal | URL | `/aviso-legal` | Enlace pie de página |
| URL Privacidad | URL | `/privacidad` | Enlace pie de página y formulario |
| URL Política de Cookies | URL | `/cookies` | Enlace pie de página |
| Latitud | Número | `39.5912` | Coordenada para el mapa *(futuro)* |
| Longitud | Número | `-0.3990` | Coordenada para el mapa *(futuro)* |
| Nombre Marca | Texto corto | `NARA MONCADA` | Nombre en el footer |
| Crédito Footer | Texto corto | `by NARA Capital & GOOR.STUDIO` | Crédito bajo el nombre en el footer |
| Copyright | Texto corto | `NARA Capital. Todos los derechos reservados.` | Texto de copyright |
| Logo | Adjunto | *(subir imagen)* | Logo de la marca *(preparado para futura implementación)* |

---

## Tabla 2 — SECCIONES

> Un registro por sección. La columna **Clave** es obligatoria e identifica a qué sección de la web corresponde.

**Valores posibles de Clave:**

| Clave | Sección en la web |
|---|---|
| `hero` | Pantalla principal (hero) |
| `nosotros` | Sección "Sobre nosotros" |
| `proyecto` | Sección "Diseño y Exclusividad" |
| `amenidades` | Sección de amenidades con fondo oscuro |
| `detalles` | Sección "Espacios comunes Planta Baja" |
| `propiedad` | Ficha de tipologías, formulario y ubicación |

**Campos disponibles por registro:**

| Campo | Tipo | Descripción |
|---|---|---|
| Clave | Texto corto | Identificador único (ver tabla arriba) — **no cambiar** |
| Etiqueta Superior | Texto corto | Texto pequeño en mayúsculas encima del título |
| Título | Texto corto | Heading principal de la sección |
| Subtítulo | Texto corto | Heading secundario (usado en el formulario de contacto) |
| Párrafo 1 | Texto largo | Primer párrafo de descripción |
| Párrafo 2 | Texto largo | Segundo párrafo (si aplica) |
| Párrafo 3 | Texto largo | Tercer párrafo (si aplica) |
| Activo | Casilla | Desmarca para usar el texto por defecto del código |

---

## Tabla 3 — IMAGENES

> Cada registro es una imagen. Se organizan por sección con el campo **Sección**.

**Valores posibles de Sección:**

| Sección | Dónde aparece |
|---|---|
| `hero` | Imagen de fondo del hero |
| `nosotros` | Imagen de la sección "Sobre nosotros" |
| `proyecto` | Imagen de la sección "Proyecto" |
| `amenidades` | Imagen de fondo de la sección amenidades |
| `detalles` | Imagen de la sección zonas comunes |
| `galeria` | Imágenes del carrusel principal de la ficha |

**Campos:**

| Campo | Tipo | Descripción |
|---|---|---|
| Nombre | Texto corto | Nombre descriptivo (solo para tu referencia) |
| Sección | Texto corto | A qué sección pertenece (ver tabla arriba) |
| Imagen | Adjunto | **Sube aquí la imagen directamente** |
| Texto Alt | Texto corto | Texto alternativo para accesibilidad/SEO |
| Orden | Número | Orden de aparición (1, 2, 3…) — importante para la galería |
| Activo | Casilla | Desmarcar para ocultar la imagen |

> **Consejo galería:** Crea varios registros con `Sección = galeria` y pon el `Orden` que quieras. Así controlas completamente el carrusel.

---

## Tabla 4 — AMENIDADES

> Cada registro es un ítem del grid de amenidades (la sección con fondo oscuro).

| Campo | Tipo | Descripción |
|---|---|---|
| Nombre | Texto corto | Nombre que aparece bajo el icono (ej. `Piscina`) |
| Icono | Texto corto | Nombre del icono (ver lista abajo) |
| Orden | Número | Orden de aparición en el grid |
| Activo | Casilla | Desmarcar para ocultar |

**Iconos disponibles** (escribe exactamente uno de estos valores):

| Valor | Icono |
|---|---|
| `sun` | Sol (piscina) |
| `dumbbell` | Mancuerna (gimnasio) |
| `building` | Edificio (sala) |
| `car` | Coche (garaje/parking) |
| `waves` | Olas |
| `bike` | Bici |
| `trees` | Árboles/naturaleza |
| `shield` | Escudo/seguridad |
| `coffee` | Café/zona de descanso |
| `wifi` | WiFi |

---

## Tabla 5 — ZONAS_COMUNES

> Cada registro es una zona común con su descripción detallada (sección "Espacios comunes Planta Baja").

| Campo | Tipo | Descripción |
|---|---|---|
| Nombre | Texto corto | Nombre de la zona (ej. `Piscina Comunitaria`) |
| Descripción | Texto largo | Descripción completa que aparece en la web |
| Orden | Número | Orden de aparición |
| Activo | Casilla | Desmarcar para ocultar |

---

## Tabla 6 — NAVEGACION

> Cada registro es un ítem del menú flotante superior.

| Campo | Tipo | Descripción |
|---|---|---|
| Etiqueta | Texto corto | Texto del botón del menú (ej. `NOSOTROS`) |
| ID Sección | Texto corto | ID de la sección a la que enlaza (ej. `nosotros`) |
| Orden | Número | Orden en el menú |
| Activo | Casilla | Desmarcar para quitar del menú |

---

## Tablas existentes (TIPOLOGÍAS y UNIDADES)

Estas tablas ya estaban funcionando. **No cambies su estructura.**

### TIPOLOGÍAS — campos relevantes

| Campo | Descripción |
|---|---|
| Nombre | Nombre de la tipología |
| Uds. Totales | Número de unidades de esa tipología |
| Rango Tamaño | Texto con el rango de m² |
| Zonas Comunes | Texto describiendo qué zonas comparte |
| Planos de Tipología | Adjunta el PDF del plano — aparece como descarga |

### UNIDADES — campos relevantes

| Campo | Descripción |
|---|---|
| Referencia | Código de la unidad (ej. `A-101`) |
| Tipología | Vincula a la tipología correspondiente |
| Planta | Planta del piso |
| Habitaciones | Número de habitaciones |
| m² Construidos | Metros cuadrados construidos |
| m² Terraza | Metros de terraza (si tiene) |
| Precio de Venta (PVP) | Precio en euros (número, sin símbolo) |
| Estado | `Disponible`, `Reservado`, o cualquier otro valor (aparece en rojo) |

---

## Flujo de trabajo recomendado

### Para cambiar un texto
1. Abre la tabla **SECCIONES** o **CONFIGURACION**
2. Encuentra el campo que quieres cambiar
3. Edita el valor
4. Recarga la web — el cambio es inmediato

### Para cambiar una imagen
1. Abre la tabla **IMAGENES**
2. Encuentra el registro de la sección que quieres cambiar (o crea uno nuevo)
3. En el campo **Imagen**, haz clic y sube el nuevo archivo
4. Asegúrate de que el campo **Sección** tiene el valor correcto
5. Marca **Activo** como ✓
6. Recarga la web

### Para actualizar precios o estado de unidades
1. Abre la tabla **UNIDADES**
2. Encuentra la unidad por su **Referencia**
3. Cambia el **Estado** o el **Precio de Venta (PVP)**
4. Recarga la web

### Para añadir una nueva amenidad
1. Abre la tabla **AMENIDADES**
2. Crea un nuevo registro
3. Rellena **Nombre**, **Icono** (uno de los valores de la lista), y **Orden**
4. Marca **Activo** como ✓

---

## Notas importantes

- **Imágenes**: Sube directamente en Airtable como adjunto. Formato recomendado: JPG o WebP, máximo 5 MB por imagen para buena velocidad de carga.
- **Si un campo está vacío**: La web usa el texto por defecto que tenía antes. No se rompe nada.
- **Casilla "Activo"**: Cuando está desmarcada, ese contenido se ignora y la web usa los valores por defecto del código.
- **Orden**: Los números no tienen que ser consecutivos. Puedes usar 10, 20, 30… para dejar espacio a inserciones futuras.
