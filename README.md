# 🏔️ La Aventura Original

<div align="center">

**Adaptación a [ngPAWS](http://www.ngpaws.com/) de la mítica aventura de Aventuras AD (1989)**

*Versión reducida y en castellano del legendario* ***Advent***

[![Licencia: MIT](https://img.shields.io/badge/Licencia-MIT-yellow.svg?style=flat-square)](./LICENSE)
[![Motor: ngPAWS](https://img.shields.io/badge/Motor-ngPAWS-blueviolet?style=flat-square)](http://www.ngpaws.com/)
[![Idioma: Español](https://img.shields.io/badge/Idioma-Español-red?style=flat-square)]()
[![PWA: Instalable](https://img.shields.io/badge/PWA-Instalable-5c6bc0?style=flat-square)]()
[![Offline: Sí](https://img.shields.io/badge/Offline-Sí-3ddc84?style=flat-square)]()


[▶️ **Jugar ahora**](https://lao.jim88.de) · [📱 Instalar en móvil](#-instalación) · [📖 Cómo jugar](#-cómo-jugar) · [🐛 Reportar fallo](https://github.com/jimraynor88/la-aventura-original-jim-edition/issues)

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
- 🔤 **Tamaño ajustable** de texto y menús
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
viven en `index.html` como *parches* cargados tras `code.js`.

### 📊 Comparativa

| Función | Original | **Edición Jim** |
|---|:-:|:-:|
| Parser en castellano | ✅ | ✅ |
| Gráficos y sonido | ✅ | ✅ |
| Guardar / Cargar con `prompt()` | ✅ | ⛔ |
| Guardar / Cargar con **interfaz propia** | ❌ | ✅ |
| **Autoguardado** periódico | ❌ | ✅ |
| **Exportar / importar** `.json` | ❌ | ✅ |
| **Mapa automático** de localidades | ❌ | ✅ |
| **Transcripción** copiable / descargable | ❌ | ✅ |
| **Barra rápida** táctil de botones | ❌ | ✅ |
| **Ajuste de tamaño** de fuente y UI | ❌ | ✅ |
| **PWA instalable** + modo offline | ❌ | ✅ |
| **Teclado virtual** se abre solo cuando lo pides | ❌ | ✅ |
| **Manifest** para Android / iOS | ❌ | ✅ |

### 🎛️ Barra rápida

Dos filas de botones con agrupación visual (salir / direcciones / entrar):

| Fila superior | Fila inferior |
|---|---|
| `Salidas` · `Salir` · `Inven.` · `Entrar` · `MIRAR` | `Bajar` · `Oeste` · `Sur` · `Diag.` · `Norte` · `Este` · `Subir` |

El botón **`Diag.`** despliega un panel con las diagonales `NO`, `NE`, `SO`, `SE`.

### 📖 Menú integrado (`☰`)

- **Guardar** / **Cargar** con lista de partidas y borrado
- **Exportar** / **Importar** todas o una partida en `.json`
- **Mapa** SVG de localidades visitadas
- **Transcripción** copiable o descargable
- **Ajustes**: tamaño del juego, tamaño del menú, barra rápida, autoguardado, gráficos
- **Estado offline** del Service Worker
- **Guía** de juego y **lista de comandos** por categorías

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

```
📁 Adaptacion-de-la-Aventura-original-ngPAWS/
├── 📄 index.html          # Página principal + parches de la Edición Jim
├── 📄 css.css             # Estilos base del motor ngPAWS
├── 📄 jquery.js           # jQuery 1.11.0 (MIT)
├── 📄 buzz.js             # Librería de sonido buzz.js (MIT)
├── 📄 code.js             # Runtime ngPAWS + base de datos compilada
├── 📄 code.txp            # Fuente de la aventura (texto plano)
├── 📄 manifest.json       # Manifest PWA
├── 📄 sw.js               # Service Worker (modo offline)
├── 📄 README.md           # Este archivo
├── 📄 LICENSE             # GNU GPL v3
└── 📁 dat/                # Recursos gráficos y sonoros
    ├── 🖼️ locXX.png       # Ilustraciones de localidades
    ├── 🖼️ dragon.png      # Ilustraciones especiales
    ├── 🖼️ intro.png
    ├── 🖼️ pirata.png
    └── 🎨 iconoXXX.svg    # Iconos de inventario
```

---

## 📝 Registro de cambios

<details>
<summary><strong>🆕 Edición Jim — Versión actual</strong></summary>

- **Interfaz móvil**: barra rápida de botones a dos filas (arriba: acciones, abajo: direcciones)
- **Diagonales** en panel desplegable (`Diag.`)
- **Menú integrado** (`☰`) que sustituye los `prompt()` del juego
- **Autoguardado** cada 10 turnos (configurable)
- **Exportación / importación** de partidas en `.json`
- **Mapa SVG** de localidades visitadas
- **Transcripción** copiable al portapapeles o descargable
- **PWA instalable** con funcionamiento offline completo
- **Ajuste de tamaño** de fuente y de UI con deslizadores
- **Corrección móvil**: el teclado virtual ya no se abre automáticamente
- **Fix**: alias del recurso `1 → dat/intro.png`
- **Fix**: limpieza de caracteres de control (SOH `\x01`) del parser PAWS

</details>

<details>
<summary><strong>📜 Historial previo</strong></summary>

- **Versión inicial**: prueba para aprender el lenguaje **ngPAWS**
- **Versión final**: unión de las dos partes originales, mejora en reconocimiento
  de verbos, gráficos de la versión de Amiga y añadidos para localidades sin
  ilustración
- **Correcciones**: examinar objetos, hablar con NPCs y añadir sinónimos
  *(gracias a [@baltasarq](https://github.com/baltasarq))*

</details>

---

## 👥 Créditos

### 🎬 Aventura original (1989)

| Rol | Persona |
|-----|---------|
| **Dirección** | Andrés Samudio |
| **Programación** | Manuel González |
| **Gráficos** | Carlos Marqués |
| **Compañía** | Aventuras AD |
| **Colaboradores** | Eva Samitier, Juan Darder, Juanjo Muñoz, Tim Gilberts |

### 🛠️ Adaptación a ngPAWS

| Rol | Persona |
|-----|---------|
| **Adaptación** | [CiberSheep](https://github.com/cibersheep) |
| **Betatesting** | Uto, I. Cabanillas, Baltasar el Arquero |
| **Motor ngPAWS** | [Carlos Sánchez](http://www.ngpaws.com/) (MIT) |
| **Sonido (buzz.js)** | Jay Salvat (MIT) |
| **jQuery** | jQuery Foundation (MIT) |

### 📱 Edición Jim

| Rol | Persona |
|-----|---------|
| **Edición móvil, correcciones y mejoras** | **Jim Raynor · Jim88.de** |

---

## ⚖️ Licencia

Este proyecto se publica bajo la **GNU General Public License v3.0**.

Consulta el archivo [LICENSE](./LICENSE) para más detalles.

> El motor **ngPAWS**, la librería **buzz.js** y **jQuery** se distribuyen bajo
> licencia **MIT**.

---

<div align="center">

### ☕ Apoya el proyecto

Si te ha gustado la Edición Jim, puedes invitarme a un café:

| 💳 PayPal | ⚡ Bitcoin Lightning |
|:-:|:-:|
| **[pay.jim88.de](https://pay.jim88.de)** | **`jimraynor@bitrefill.me`** |

<br>

**[⬆ Volver arriba](#-la-aventura-original)**

<sub>Hecho con 💙 y mucho ☕️</sub>

</div>

---

## 🔎 Notas técnicas

<details>
<summary><strong>🧩 Cómo funciona el <em>parcheo</em> del motor</strong></summary>

La Edición Jim **no modifica** el runtime de ngPAWS (`code.js`) ni la base de
datos compilada. En su lugar, el `index.html` incluye un bloque `<script>` que se
ejecuta después de `code.js` y que:

1. **Añade** recursos faltantes (p. ej. el alias `dat/intro.png`)
2. **Envuelve** funciones del motor (`filterText`, `focusInput`, `drawPicture`,
   `ACCsave`, `ACCload`) manteniendo una referencia a las originales
3. **Inyecta** nueva UI (menú, barra rápida, modales) usando `document.createElement`
   y `addEventListener`, sin depender de frameworks
4. **Persiste** el estado en `localStorage` con claves prefijadas
   (`ngpaws_savegame_*`, `ngpaws_settings`, `ngpaws_visited`)
5. **Registra** un Service Worker que cachea tanto el *shell* (HTML, CSS, JS)
   como todos los recursos de `dat/`

Este enfoque permite **actualizar el motor o el `.txp` original sin romper la
capa móvil**, y viceversa.

</details>

<details>
<summary><strong>🗺️ Cómo se construye el mapa</strong></summary>

El mapa se genera a partir del array `connections` del motor (que ya contiene
las salidas de cada localidad). El algoritmo es un **BFS** (búsqueda en anchura)
desde la localidad actual:

1. Se asigna la posición `(0,0)` a la localidad actual
2. Para cada dirección `2..9` (N, S, E, O, NE, NO, SE, SO) se calcula un
   desplazamiento en píxeles usando `DIR_OFFSET`
3. Se propaga a todas las localidades alcanzables
4. Se dibuja un SVG sólo con las localidades **visitadas** (registradas en
   `ngpaws_visited` por un *hook* sobre `drawPicture` y `ACCgoto`)

</details>

<details>
<summary><strong>📶 Detalles del Service Worker</strong></summary>

El Service Worker (`sw.js`) usa **cache-first** con fallback a red:

- Cachea el *app shell* (`index.html`, `css.css`, `jquery.js`, `buzz.js`,
  `code.js`, `manifest.json`)
- Cachea **todos** los recursos de `dat/` (localidades, iconos, personajes)
- Ignora *query strings* (`?v=...`) al buscar en caché
- Al activarse, elimina versiones antiguas de la caché
- Responde a mensajes `FORCE_RECACHE` y `CACHE_STATUS` desde la app

Si actualizas los archivos, **incrementa `SW_VERSION`** para invalidar la caché.

</details>

<details>
<summary><strong>⌨️ Cómo se evita el teclado virtual automático</strong></summary>

El motor original llama a `focusInput()` constantemente (al arrancar, tras cada
comando, tras cada descripción). En móvil esto **abre el teclado virtual sin que
el jugador lo pida**, lo cual es molesto.

La solución es interceptar `focusInput` en dispositivos táctiles: si el input
**ya estaba enfocado** (el usuario estaba escribiendo), se delega al original;
si no, sólo se resetea el temporizador y se hace *scroll* al final. Así el
teclado sólo aparece cuando el jugador toca el campo de texto.

</details>
