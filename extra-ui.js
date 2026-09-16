/* ============================================================
   extra-ui.js — Extras de la Edición Jim
   ------------------------------------------------------------
   Se carga DESPUÉS del script inline de index.html.
   Añade dos mejoras independientes del motor ngPAWS:

   1) Parche de ACCexits
      Filtra las salidas "fantasma" del comando SALIDAS:
        · Conexiones que apuntan a la localidad 0 (título)
        · Conexiones que apuntan a la propia localidad (bucles
          de laberinto que no te mueven)
      No filtra bloqueos condicionales (candados, trolls…) porque
      dependen del estado del juego y del árbol de respuestas.

   2) Barra flotante con dos botones siempre visibles
        · Izquierda: 🗺️ Mapa   → abrir / cerrar el mapa
        · Derecha:   ▼ / ▲ Barra → mostrar / ocultar la quickbar
      El icono del toggle se sincroniza con el estado real, incluso
      si la quickbar se alterna desde el menú ☰.

   Todo es aditivo. No modifica ningún archivo del motor original.
   ============================================================ */

(function () {
  'use strict';

  // ------------------------------------------------------------
  //  Utilidades
  // ------------------------------------------------------------
  const $ = sel => document.querySelector(sel);

  function toast(msg) {
    const el = document.createElement('div');
    el.className = 'ng-toast';
    el.textContent = msg;
    document.body.appendChild(el);
    requestAnimationFrame(() => el.classList.add('show'));
    setTimeout(() => {
      el.classList.remove('show');
      setTimeout(() => el.remove(), 300);
    }, 1800);
  }

  // ------------------------------------------------------------
  //  1) PARCHE DE ACCexits
  //     El motor lista las conexiones "tontas": si una salida
  //     apunta a 0 (título) o a la propia localidad (bucle de
  //     laberinto), aparece en SALIDAS aunque no sirva.
  //     Filtramos temporalmente esas casillas antes de llamar al
  //     original y las restauramos después con try/finally.
  // ------------------------------------------------------------
  function patchExits() {
    if (typeof window.ACCexits !== 'function') return;
    if (window.__accExitsPatched) return;

    const _ACCexits = window.ACCexits;

    window.ACCexits = function (locno, mesno) {
      const conns = window.connections && window.connections[locno];
      if (!Array.isArray(conns)) {
        return _ACCexits.call(this, locno, mesno);
      }

      const backup = conns.slice();

      for (let i = 0; i < conns.length; i++) {
        const dest = conns[i];
        if (dest === 0 || dest === locno) {
          conns[i] = -1;
        }
      }

      try {
        return _ACCexits.call(this, locno, mesno);
      } finally {
        // Restauramos SIEMPRE, pase lo que pase
        for (let i = 0; i < backup.length; i++) conns[i] = backup[i];
      }
    };

    window.__accExitsPatched = true;
    console.log('[extra-ui] ACCexits parcheado (filtra 0 y bucles).');
  }

  // ------------------------------------------------------------
  //  2) ESTILOS
  // ------------------------------------------------------------
  function injectStyles() {
    if (document.getElementById('ng-extra-styles')) return;

    const style = document.createElement('style');
    style.id = 'ng-extra-styles';
    style.textContent = `
      /* ---------- Barra flotante ---------- */
      #ng-floatbar {
        position: fixed;
        bottom: 8%;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        max-width: 720px;
        padding: 0 6px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 8px;
        z-index: 2100;              /* por encima del modal (2000) */
        pointer-events: none;        /* el hueco central no bloquea clics */
        transition: bottom .22s ease, opacity .15s, visibility .15s;
      }

      /* Cuando la quickbar está visible, la barra flotante se eleva */
      body.qb-visible #ng-floatbar {
        bottom: calc(8% + var(--qb-height, 78px) + 4px);
      }

      #ng-floatbar > button {
        pointer-events: auto;
        border: 1px solid rgba(255,255,255,.14);
        background: rgba(0,0,0,.42);
        color: #eaeaea;
        font-family: Verdana, arial, helvetica, sans-serif;
        font-size: 11px;
        line-height: 1;
        padding: 5px 11px;
        border-radius: 999px;
        cursor: pointer;
        opacity: 0.62;                /* semitransparente por defecto */
        transition:
          opacity .15s,
          background .15s,
          border-color .15s,
          transform .12s;
        -webkit-tap-highlight-color: transparent;
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        user-select: none;
        white-space: nowrap;
      }

      #ng-floatbar > button:hover,
      #ng-floatbar > button:focus-visible {
        opacity: 0.96;
        background: rgba(43,108,176,.78);
        border-color: rgba(43,108,176,.9);
        outline: none;
      }

      #ng-floatbar > button:active {
        transform: scale(.94);
      }

      @media (max-width: 480px) {
        #ng-floatbar > button {
          font-size: 10px;
          padding: 4px 9px;
        }
      }

      /* En móvil, si hay un modal abierto que no sea el mapa, ocultamos
         la barra flotante para que no tape el contenido */
      @media (max-width: 500px) {
        body.ng-modal-open:not(.ng-modal-is-map) #ng-floatbar {
          visibility: hidden;
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // ------------------------------------------------------------
  //  3) BARRA FLOTANTE
  // ------------------------------------------------------------
  function quickbarIsVisible() {
    const qb = document.getElementById('ng-quickbar');
    return !!(qb && qb.classList.contains('on'));
  }

  function updateFloatPosition() {
    const qb = document.getElementById('ng-quickbar');
    const visible = quickbarIsVisible();

    document.body.classList.toggle('qb-visible', visible);

    if (visible && qb) {
      const h = Math.ceil(qb.getBoundingClientRect().height);
      document.documentElement.style.setProperty('--qb-height', h + 'px');
    }
  }

  function syncToggleIcon() {
    const btn = document.getElementById('ng-btn-toggle-bar');
    if (!btn) return;
    const visible = quickbarIsVisible();
    btn.innerHTML = visible
      ? '▲ <span>Barra</span>'
      : '▼ <span>Barra</span>';
    btn.title = visible
      ? 'Ocultar la barra de acciones'
      : 'Mostrar la barra de acciones';
  }

  function toggleQuickbar() {
    let settings = {};
    try {
      settings = JSON.parse(localStorage.getItem('ngpaws_settings')) || {};
    } catch (_) {}

    settings.quickbar = !quickbarIsVisible();

    try {
      localStorage.setItem('ngpaws_settings', JSON.stringify(settings));
    } catch (_) {}

    const qb = document.getElementById('ng-quickbar');
    if (qb) qb.classList.toggle('on', settings.quickbar);

    updateFloatPosition();
    syncToggleIcon();

    toast(settings.quickbar ? '🎯 Barra visible' : '🎯 Barra oculta');
  }

  function onMapClick() {
    const modal = document.getElementById('ng-modal');
    const isOpen = modal && modal.classList.contains('open');
    const title = document.getElementById('ng-modal-title');
    const isMapOpen = isOpen && title && /mapa/i.test(title.textContent || '');

    if (isMapOpen) {
      // El mapa ya estaba abierto → cerrar
      const xBtn = document.getElementById('ng-modal-x');
      if (xBtn) xBtn.click();
    } else if (window.ngpaws && typeof window.ngpaws.showMap === 'function') {
      // Abrir la vista del mapa (o cambiar a ella si hay otro modal)
      window.ngpaws.showMap();
    } else {
      console.warn('[extra-ui] ngpaws.showMap no disponible');
    }
  }

  function addFloatingBar() {
    if (document.getElementById('ng-floatbar')) return;

    const bar = document.createElement('div');
    bar.id = 'ng-floatbar';

    const btnMap = document.createElement('button');
    btnMap.id = 'ng-btn-map';
    btnMap.type = 'button';
    btnMap.title = 'Abrir o cerrar el mapa';
    btnMap.setAttribute('aria-label', 'Mapa');
    btnMap.innerHTML = '🗺️ <span>Mapa</span>';

    const btnToggle = document.createElement('button');
    btnToggle.id = 'ng-btn-toggle-bar';
    btnToggle.type = 'button';
    btnToggle.setAttribute('aria-label', 'Mostrar u ocultar barra');
    btnToggle.innerHTML = '▼ <span>Barra</span>';

    bar.appendChild(btnMap);
    bar.appendChild(btnToggle);
    document.body.appendChild(bar);

    btnMap.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      onMapClick();
    });

    btnToggle.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      toggleQuickbar();
    });

    // Sincronizar icono si la quickbar se alterna desde el menú ☰
    const qb = document.getElementById('ng-quickbar');
    if (qb && window.MutationObserver) {
      const obs = new MutationObserver(() => {
        updateFloatPosition();
        syncToggleIcon();
      });
      obs.observe(qb, { attributes: true, attributeFilter: ['class'] });
    }

    window.addEventListener('resize', updateFloatPosition);

    updateFloatPosition();
    syncToggleIcon();
    console.log('[extra-ui] Barra flotante lista.');
  }

  // ------------------------------------------------------------
  //  4) VIGILANCIA DEL MODAL (para clases en <body>)
  // ------------------------------------------------------------
  function watchModal() {
    let lastState = '';
    setInterval(() => {
      const modal = document.getElementById('ng-modal');
      const isOpen = !!(modal && modal.classList.contains('open'));
      let state = isOpen ? 'open' : 'closed';
      if (isOpen) {
        const title = document.getElementById('ng-modal-title');
        const isMap = title && /mapa/i.test(title.textContent || '');
        state = isMap ? 'map' : 'other';
      }
      if (state !== lastState) {
        lastState = state;
        document.body.classList.toggle('ng-modal-open', isOpen);
        document.body.classList.toggle('ng-modal-is-map', state === 'map');
      }
    }, 150);
  }

  // ------------------------------------------------------------
  //  5) INIT
  // ------------------------------------------------------------
  function init() {
    injectStyles();
    patchExits();
    watchModal();

    // Esperamos a que la quickbar exista (la crea el inline script
    // dentro de un setTimeout 0 tras DOMContentLoaded)
    let attempts = 30;
    const tryAdd = () => {
      const qb = document.getElementById('ng-quickbar');
      if (qb) {
        let settings = {};
        try {
          settings = JSON.parse(localStorage.getItem('ngpaws_settings')) || {};
        } catch (_) {}
        qb.classList.toggle('on', settings.quickbar !== false);

        addFloatingBar();
        return;
      }
      if (attempts-- > 0) setTimeout(tryAdd, 60);
      else addFloatingBar();
    };
    tryAdd();
  }

  if (document.readyState === 'complete' ||
      document.readyState === 'interactive') {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }
})();
