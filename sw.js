/* ============================================================
   Service Worker — La Aventura Original
   Estrategia: cache-first. Todo queda cacheado tras la primera visita.
   ============================================================ */

const CACHE = 'aventura-original-v1';

// Recursos del motor
const CORE = [
  './',
  './index.html',
  './css.css',
  './jquery.js',
  './buzz.js',
  './code.js',
  './manifest.json'
];

// Recursos gráficos y de sonido
const DATOS = [
  // --- Localidades ---
  './dat/loc00.svg','./dat/loc03.png','./dat/loc04.png','./dat/loc05.png',
  './dat/loc06.png','./dat/loc07.png','./dat/loc08.png','./dat/loc09.png',
  './dat/loc10.png','./dat/loc11.png','./dat/loc12.png','./dat/loc13.png',
  './dat/loc14.png','./dat/loc15.png','./dat/loc16.png','./dat/loc17.png',
  './dat/loc18.png','./dat/loc19.png','./dat/loc20.png','./dat/loc21.png',
  './dat/loc22.png','./dat/loc23.png','./dat/loc24.png','./dat/loc25.png',
  './dat/loc26.png','./dat/loc26-abierta.png','./dat/loc26abierta.png',
  './dat/loc28.png','./dat/loc29.png','./dat/loc30.png','./dat/loc31.png',
  './dat/loc32.png','./dat/loc33.png','./dat/loc35.png','./dat/loc36.png',
  './dat/loc37.png','./dat/loc38.png','./dat/loc39.png','./dat/loc40.png',
  './dat/loc42.png','./dat/loc48.png','./dat/loc66.png','./dat/loc67.png',
  './dat/loc68.png','./dat/loc69.png','./dat/loc77.png','./dat/loc78.png',
  './dat/loc79.png','./dat/loc81.png','./dat/loc82.png','./dat/loc83.png',
  './dat/loc84.png','./dat/loc88.png','./dat/loc92.png','./dat/loc93.png',
  './dat/loc94.png','./dat/loc96.png','./dat/loc98.png','./dat/loc100.png',
  './dat/loc101.png','./dat/loc102.png','./dat/loc103.png','./dat/loc104.png',
  './dat/loc105.png','./dat/loc106.png','./dat/loc112.png','./dat/loc116.png',
  './dat/loc117.png','./dat/loc117osolibre.png','./dat/loc117vacia.png',
  './dat/loc118.png',
  // --- Personajes / intro ---
  './dat/dragon.png','./dat/enanomalauva.png','./dat/intro.png','./dat/pirata.png',
  // --- Iconos de objeto ---
  './dat/iconoalfombra.svg','./dat/iconoalmohada.svg','./dat/iconobotas.svg',
  './dat/iconobotella.svg','./dat/iconocadena.svg','./dat/iconodiamante.svg',
  './dat/iconoesmeralda.svg','./dat/iconoespecias.svg','./dat/iconogarfio.svg',
  './dat/iconohacha.svg','./dat/iconohueso.svg','./dat/iconohuevo.svg',
  './dat/iconojarron.svg','./dat/iconojaula.svg','./dat/iconojoya.svg',
  './dat/iconolinterna.svg','./dat/iconollave.svg','./dat/iconomoneda.svg',
  './dat/iconopepita.svg','./dat/iconoperla.svg','./dat/iconopiedra.svg',
  './dat/iconopila.svg','./dat/iconopiramide.svg','./dat/iconotitanio.svg',
  './dat/iconotortilla.svg','./dat/iconotridente.svg','./dat/iconovarita.svg'
];

// Instalación: precarga todo (uno a uno para que un fallo no rompa el resto)
self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(cache =>
      Promise.all(
        [...CORE, ...DATOS].map(url =>
          cache.add(url).catch(err => console.warn('SW: no cacheado', url, err))
        )
      )
    )
  );
});

// Activación: borra versiones viejas
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Fetch: primero caché, y en paralelo intenta red para actualizar
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  if (!e.request.url.startsWith(self.location.origin)) return;

  e.respondWith(
    caches.match(e.request).then(cached => {
      const fromNetwork = fetch(e.request).then(resp => {
        if (resp && resp.status === 200 && resp.type === 'basic') {
          const copy = resp.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy));
        }
        return resp;
      }).catch(() => cached);
      return cached || fromNetwork;
    })
  );
});
