/* ============================================================
   Service Worker — La Aventura Original
   Cambia SW_VERSION cada vez que modifiques este archivo.
   ============================================================ */

const SW_VERSION = 'v6';
const CACHE      = 'aventura-' + SW_VERSION;

const CORE = [
  './',
  './index.html',
  './css.css',
  './jquery.js',
  './buzz.js',
  './code.js',
  './manifest.json'
];

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

// ---------- INSTALL ----------
self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    const all   = [...CORE, ...DATOS];
    let ok = 0, fail = 0;
    for (const url of all) {
      try {
        // cache: 'reload' fuerza red, evita respuestas HTTP cacheadas viejas
        await cache.add(new Request(url, { cache: 'reload' }));
        ok++;
      } catch (err) {
        fail++;
        console.warn('[SW] No cacheado:', url, err.message);
      }
    }
    console.log('[SW] Cacheado:', ok, '· Fallos:', fail);
    const clients = await self.clients.matchAll();
    clients.forEach(c => c.postMessage({ type: 'CACHE_DONE', ok, fail }));
  })());
});

// ---------- ACTIVATE ----------
self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

// ---------- FETCH ----------
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  if (!e.request.url.startsWith(self.location.origin)) return;

  e.respondWith((async () => {
    // 1) Buscar en caché (ignorando query strings ?v=...)
    const cached = await caches.match(e.request, { ignoreSearch: true });
    if (cached) return cached;

    // 2) No está → red
    try {
      const resp = await fetch(e.request);
      if (resp && resp.status === 200 && resp.type === 'basic') {
        const copy = resp.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
      }
      return resp;
    } catch (err) {
      // 3) Red falla: fallback a index.html si es una navegación
      if (e.request.mode === 'navigate') {
        const fallback = await caches.match('./index.html');
        if (fallback) return fallback;
      }
      throw err;
    }
  })());
});

// ---------- MENSAJES DESDE LA APP ----------
self.addEventListener('message', e => {
  if (e.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (e.data === 'FORCE_RECACHE') {
    e.waitUntil((async () => {
      const cache = await caches.open(CACHE);
      const all   = [...CORE, ...DATOS];
      for (const url of all) {
        try { await cache.add(new Request(url, { cache: 'reload' })); } catch (_) {}
      }
      const clients = await self.clients.matchAll();
      clients.forEach(c => c.postMessage({ type: 'CACHE_DONE' }));
    })());
  }
  if (e.data === 'CACHE_STATUS') {
    caches.open(CACHE).then(c => c.keys()).then(keys => {
      if (e.source) e.source.postMessage({ type: 'CACHE_STATUS_RESULT', count: keys.length });
    });
  }
});
