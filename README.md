# 🏔️ La Aventura Original

<div align="center">

**Adaptación a [ngPAWS](http://www.ngpaws.com/) de la mítica aventura de Aventuras AD (1989)**

*Versión reducida y en castellano del legendario* ***Advent***

[![Licencia: MIT](https://img.shields.io/badge/Licencia-MIT-yellow.svg?style=flat-square)](./LICENSE)
[![Motor: ngPAWS](https://img.shields.io/badge/Motor-ngPAWS-blueviolet?style=flat-square)](http://www.ngpaws.com/)
[![Idioma: Español](https://img.shields.io/badge/Idioma-Español-red?style=flat-square)]()
[![PWA: Instalable](https://img.shields.io/badge/PWA-Instalable-5c6bc0?style=flat-square)]()
[![Offline: Sí](https://img.shields.io/badge/Offline-Sí-3ddc84?style=flat-square)]()


[▶️ **Jugar ahora**](https://lao.jim88.de) · [📱 Instalar en móvil](#-instalación) · [📖 Cómo jugar](#-cómo-jugar) · [🎬 Ver entrevista](https://www.youtube.com/watch?v=HLcyTd_QrQs) · [🐛 Reportar fallo](https://github.com/jimraynor88/la-aventura-original-jim-edition/issues)

</div>

---

## 🎮 ¿Qué es?

**La Aventura Original** fue publicada por **Aventuras AD** en 1989. Se trata de
una versión reducida y en castellano del legendario *Advent* (también conocido
como *Colossal Cave Adventure*), el primer videojuego de aventura conversacional
de la historia, escrito originalmente por **Will Crowther** y **Don Woods** en
1976.

Esta edición es una **recreación fiel** sobre el motor
[**ngPAWS**](http://www.ngpaws.com/), con gráficos extraídos de la versión de
**Amiga** e **ilustraciones nuevas** para aquellas localidades que nunca las
tuvieron.

> 💬 **¿Cómo se juega?** Escribe órdenes como `COGE LLAVE`, `ABRE PUERTA` o
> `MIRA` y descubre los secretos de **La Gran Caverna**. Escribe `AYUDA` en
> cualquier momento si te atascas.
>
> 🎬 **¿Quieres saber más?** En el menú `☰ → Acerca de` tienes la
> [entrevista de RetroMadrid 2013](https://www.youtube.com/watch?v=HLcyTd_QrQs)
> a los creadores originales.

---

## 📸 Capturas

<div align="center">

| | | |
|:-:|:-:|:-:|
| ![Intro](dat/intro.png) | ![Bosque](dat/loc16.png) | ![Volcán](dat/loc12.png) |
| *Pantalla de inicio* | *Bosque profundo* | *Borde del volcán* |

| | | |
|:-:|:-:|:-:|
| ![Reja](dat/loc26.png) | ![Trono](dat/loc66.png) | ![Dragón](dat/dragon.png) |
| *La reja de la caverna* | *Trono de los Reyes Elfos* | *El "bisssssho"* |

</div>

---

## ✨ Características

<table>
<tr>
<td width="50%" valign="top">

### 🕹️ Motor de juego
- 🧠 **Parser en castellano** con sinónimos, pronombres y corrección de erratas
- 🎨 **Gráficos** por localidad, con soporte SVG y PNG
- 🔊 **Sonido** mediante la librería *buzz.js*
- 💾 **Guardado** en `localStorage`
- 🌍 **Dos partes** unidas en una sola aventura continua

</td>
<td width="50%" valign="top">

### 🚀 Edición Jim
- 📱 **Optimizada para móvil** (barra rápida de botones)
- 🎨 **Colores personalizables** por categoría de botón
- 📐 **Botonería acoplada** debajo del texto, ocultable (el texto se expande al ocultarla)
- 🔤 **Tamaño ajustable** de texto, menús y botones
- 💾 **Autoguardado** cada N turnos
- 🗺️ **Mapa automático** de localidades visitadas
- 📤 **Exportar / importar** partidas en `.json`
- 📶 **PWA offline** (Service Worker)
- ☰ **Menú integrado** sin `prompt()` nativo

</td>
</tr>
</table>

---

## 🆕 La Edición Jim

Esta versión añade una capa moderna de interfaz **sin tocar el motor original**.
Todo el código de juego (`code.js`, `code.txp`) permanece intacto; los cambios
viven en `index.html` y en los **módulos externos** `extra-ui.js` y
`extra-dock.js`, que se cargan tras `code.js`.

### 📊 Comparativa

| Función | Original | **Edición Jim** |
|---|:-:|:-:|
| Parser en castellano | ✅ | ✅ |
| Gráficos y sonido | ✅ | ✅ |
| Guardar / Cargar con `prompt()` | ✅ | ✅ |
| Guardar / Cargar con **interfaz propia** | ❌ | ✅ |
| **Autoguardado** periódico | ❌ | ✅ |
| **Exportar / importar** `.json` | ❌ | ✅ |
| **Mapa automático** de localidades | ❌ | ✅ |
| **Transcripción** copiable / descargable | ❌ | ✅ |
| **Barra rápida** táctil de botones | ❌ | ✅ |
| **Botonería acoplada** debajo del texto (ocultable) | ❌ | ✅ |
| **Colores personalizables** por categoría | ❌ | ✅ |
| **Tamaño específico** de la barra rápida | ❌ | ✅ |
| **Filtrado** de salidas fantasma (`SALIDAS`) | ❌ | ✅ |
| **Ajuste de tamaño** de fuente y UI | ❌ | ✅ |
| **PWA instalable** + modo offline | ❌ | ✅ |
| **Teclado virtual** se abre solo cuando lo pides | ❌ | ✅ |
| **Manifest** para Android / iOS | ❌ | ✅ |
| **Entrevista** a los creadores en el menú | ❌ | ✅ |

### 🎛️ Barra rápida

Dos filas de botones con agrupación visual por color:

| Fila superior | Fila inferior |
|---|---|
| `Salidas` · `Salir` · `Inven.` · `Entrar` · `MIRAR` | `Bajar` · `Oeste` · `Sur` · `Diag.` · `Norte` · `Este` · `Subir` |

El botón **`Diag.`** despliega un panel con las diagonales `NO`, `NE`, `SO`, `SE`.

### 🎨 Colores por categoría

Cada grupo de botones tiene su propio color, personalizable desde
`☰ → Ajustes → Botones de la barra → 🎨 Cambiar colores…`:

| Categoría | Botones | Color por defecto |
|---|---|---|
| 🟥 **out** | Salidas, Salir, Bajar | Rojo tenue |
| 🟦 **in** | Entrar, Subir | Azul tenue |
| ⬜ **dir** | Norte, Sur, Este, Oeste | Gris neutro |
| 🟪 **diag** | Diag. y panel de diagonales | Morado |
| 🔵 **primary** | MIRAR, Inven. | Azul brillante |

### 📐 Botonería acoplada

La barra rápida vive **debajo del texto** de la aventura, en su propia franja.
El texto se achica automáticamente para dejarle sitio.

Con el botón flotante **▼/▲ Barra** (esquina inferior derecha) se puede
**mostrar u ocultar** la botonería: al ocultarla, el área de texto se
**expande** y ocupa todo el hueco disponible; al mostrarla de nuevo, vuelve
a contraerse.

El modo de visualización se controla desde `extra-dock.js` y el estado se
guarda por partida en `localStorage`.

### 📖 Menú integrado (`☰`)

- **Guardar** / **Cargar** con lista de partidas y borrado
- **Exportar** / **Importar** todas o una partida en `.json`
- **Mapa** SVG de localidades visitadas (con acceso directo a **Comandos**)
- **Transcripción** copiable o descargable
- **Ajustes**: tamaño del juego, tamaño del menú, barra rápida, tamaño y colores de los botones, autoguardado, gráficos
- **Estado offline** del Service Worker
- **Guía** de juego y **lista de comandos** por categorías
- **Acerca de** con créditos y **entrevista** a los creadores

---

## 🎯 Cómo jugar

### 🧭 Movimiento

| Comando | Significado |
|---------|-------------|
| `N` `S` `E` `O` | Norte, Sur, Este, Oeste |
| `NE` `NO` `SE` `SO` | Diagonales |
| `ARRIBA` / `ABAJO` | Subir / bajar |
| `ENTRAR` / `SALIR` | Entrar / salir |
| `SALIDAS` o `X` | Ver salidas disponibles |

### 🎒 Objetos

| Comando | Significado |
|---------|-------------|
| `COGE LLAVE` | Coger objeto |
| `DEJA LLAVE` | Soltar objeto |
| `EXAMINA PUERTA` (`EX`) | Examinar |
| `INVENTARIO` (`I`) | Ver qué llevas |
| `METE LLAVE EN CAJA` | Meter en contenedor |
| `SACA LLAVE DE CAJA` | Sacar de contenedor |

### 🗣️ Interacción

| Comando | Significado |
|---------|-------------|
| `HABLA CON ENANO` / `DI HOLA` | Hablar con un NPC |
| `PREGUNTA A ENANO` | Preguntar |
| `DA TORTILLA A OSO` | Dar objeto |
| `SALUDA` / `BESA` / `ABRAZA` | Gestos sociales |

> 📚 Pulsa `☰` → **Comandos** para ver el listado completo por categorías.

---

## 🚀 Instalación

### 🌐 Jugar en el navegador

Abre directamente la versión alojada:

🔗 **[https://lao.jim88.de](https://lao.jim88.de)**

### 📱 Instalar como app (PWA)

<table>
<tr>
<td valign="top" width="50%">

**Android · Chrome / Edge**

1. Abre la web en el navegador
2. Menú **⋮ → Instalar aplicación**
3. Confirma y tendrás un icono en el escritorio

</td>
<td valign="top" width="50%">

**iOS · Safari**

1. Abre la web en Safari
2. Botón **Compartir** → **Añadir a pantalla de inicio**
3. Confirma el nombre y listo

</td>
</tr>
</table>

Una vez instalada, la app funciona **sin conexión** gracias al Service Worker.

### 🛠️ Desarrollo local

Como es una app estática, basta con servir los archivos por HTTP:

> ⚠️ **No abras `index.html` con `file://`** — el Service Worker y la PWA
> requieren `https://` o `http://localhost`.

---

## 📂 Estructura del proyecto
