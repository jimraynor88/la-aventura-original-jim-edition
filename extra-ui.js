/* ============================================================
   extra-ui.js — Extras de la Edición Jim (v2)
   ------------------------------------------------------------
   1) Parche de ACCexits (filtra 0 y bucles)
   2) Barra flotante Mapa / Barra
   3) Tamaño específico de la barra rápida
   4) Colores personalizables por categoría de botón
   5) Barra rápida oculta por defecto
   6) Icono ☰ siempre pulsable (por encima de anykey/blocks)
   ============================================================ */

(function () {
  'use strict';

  const $ = sel => document.querySelector(sel);
  const SETTINGS_KEY = 'ngpaws_settings';

  function readSettings() {
    try { return JSON.parse(localStorage.getItem(SETTINGS_KEY)) || {}; }
    catch (_) { return {}; }
  }
  function writeSettings(s) {
    try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(s)); } catch (_) {}
  }
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

  // ============================================================
  //  1) ACCexits — filtra salidas fantasma
  // ============================================================
  function patchExits() {
    if (typeof window.ACCexits !== 'function') return;
    if (window.__accExitsPatched) return;
    const _ACCexits = window.ACCexits;
    window.ACCexits = function (locno, mesno) {
      const conns = window.connections && window.connections[locno];
      if (!Array.isArray(conns)) return _ACCexits.call(this, locno, mesno);
      const backup = conns.slice();
      for (let i = 0; i < conns.length; i++) {
        const d = conns[i];
        if (d === 0 || d === locno) conns[i] = -1;
      }
      try { return _ACCexits.call(this, locno, mesno); }
      finally { for (let i = 0; i < backup.length; i++) conns[i] = backup[i]; }
    };
    window.__accExitsPatched = true;
  }

  // ============================================================
  //  2) Paletas por defecto (para reset)
  // ============================================================
  const DEFAULT_PALETTE = {
    out:      { bg:'#2a1a1a', border:'#4a2a2a', color:'#e8d0d0', hoverBg:'#4a2a2a', hoverBorder:'#6a3a3a' },
    in:       { bg:'#1a2030', border:'#2a3a5a', color:'#d0e0f0', hoverBg:'#2a3a5a', hoverBorder:'#3a5a7a' },
    dir:      { bg:'#1a1a1a', border:'#333333', color:'#eaeaea', hoverBg:'#2a2a2a', hoverBorder:'#444444' },
    diag:     { bg:'#2a1a3a', border:'#4a2a6a', color:'#e0d0f0', hoverBg:'#4a2a6a', hoverBorder:'#6a3a8a' },
    primary:  { bg:'#2b6cb0', border:'#2b6cb0', color:'#ffffff', hoverBg:'#377cc0', hoverBorder:'#377cc0' },
  };
  window.NG_DEFAULT_PALETTE = DEFAULT_PALETTE;

  // ============================================================
  //  3) Aplicar ajustes de barra (tamaño + colores)
  // ============================================================
  function applyBarSettings() {
    const s = readSettings();

    // --- Tamaño específico de la barra rápida ---
    const qbScale = s.quickbarFontScale || 1;
    document.documentElement.style.setProperty('--qb-fs', qbScale);

    // --- Paleta de colores ---
    const palette = Object.assign({}, DEFAULT_PALETTE, s.quickbarPalette || {});
    const root = document.documentElement;
    for (const key of Object.keys(palette)) {
      const c = palette[key];
      root.style.setProperty('--qb-' + key + '-bg', c.bg);
      root.style.setProperty('--qb-' + key + '-border', c.border);
      root.style.setProperty('--qb-' + key + '-color', c.color);
      root.style.setProperty('--qb-' + key + '-hover-bg', c.hoverBg);
      root.style.setProperty('--qb-' + key + '-hover-border', c.hoverBorder);
    }
  }
  window.NG_applyBarSettings = applyBarSettings;

  // ============================================================
  //  4) Estilos propios del módulo
  // ============================================================
  function injectStyles() {
    if (document.getElementById('ng-extra-styles')) return;
    const st = document.createElement('style');
    st.id = 'ng-extra-styles';
    st.textContent = `
      /* ---- Icono ☰ por encima de anykey / block / modal ---- */
      #ng-btn-menu { z-index: 2600 !important; }

      /* ---- Tamaño ajustable de la barra rápida ---- */
      .ng-qb-btn {
        font-size: calc(11px * var(--qb-fs, 1)) !important;
        height:    calc(30px * var(--qb-fs, 1)) !important;
      }
      @media (max-width: 480px) {
        .ng-qb-btn {
          font-size: calc(10px * var(--qb-fs, 1)) !important;
          height:    calc(28px * var(--qb-fs, 1)) !important;
        }
      }

      /* ---- Colores configurables por categoría ---- */
      .ng-qb-btn.out {
        background:   var(--qb-out-bg,     #2a1a1a) !important;
        border-color: var(--qb-out-border, #4a2a2a) !important;
        color:        var(--qb-out-color,  #e8d0d0) !important;
      }
      .ng-qb-btn.out:hover {
        background:   var(--qb-out-hover-bg,     #4a2a2a) !important;
        border-color: var(--qb-out-hover-border, #6a3a3a) !important;
      }
      .ng-qb-btn.in {
        background:   var(--qb-in-bg,     #1a2030) !important;
        border-color: var(--qb-in-border, #2a3a5a) !important;
        color:        var(--qb-in-color,  #d0e0f0) !important;
      }
      .ng-qb-btn.in:hover {
        background:   var(--qb-in-hover-bg,     #2a3a5a) !important;
        border-color: var(--qb-in-hover-border, #3a5a7a) !important;
      }
      .ng-qb-btn.dir {
        background:   var(--qb-dir-bg,     #1a1a1a) !important;
        border-color: var(--qb-dir-border, #333333) !important;
        color:        var(--qb-dir-color,  #eaeaea) !important;
      }
      .ng-qb-btn.dir:hover {
        background:   var(--qb-dir-hover-bg,     #2a2a2a) !important;
        border-color: var(--qb-dir-hover-border, #444444) !important;
      }
      .ng-qb-btn.diag {
        background:   var(--qb-diag-bg,     #2a1a3a) !important;
        border-color: var(--qb-diag-border, #4a2a6a) !important;
        color:        var(--qb-diag-color,  #e0d0f0) !important;
      }
      .ng-qb-btn.diag:hover,
      .ng-qb-btn.diag.open {
        background:   var(--qb-diag-hover-bg,     #4a2a6a) !important;
        border-color: var(--qb-diag-hover-border, #6a3a8a) !important;
      }
      .ng-qb-btn.primary {
        background:   var(--qb-primary-bg,     #2b6cb0) !important;
        border-color: var(--qb-primary-border, #2b6cb0) !important;
        color:        var(--qb-primary-color,  #ffffff) !important;
      }
      .ng-qb-btn.primary:hover {
        background:   var(--qb-primary-hover-bg,     #377cc0) !important;
        border-color: var(--qb-primary-hover-border, #377cc0) !important;
      }

      /* ---- Barra flotante Mapa / Barra ---- */
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
        z-index: 2100;
        pointer-events: none;
        transition: bottom .22s ease, opacity .15s, visibility .15s;
      }
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
        opacity: 0.62;
        transition: opacity .15s, background .15s, border-color .15s, transform .12s;
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
      #ng-floatbar > button:active { transform: scale(.94); }
      @media (max-width: 480px) {
        #ng-floatbar > button { font-size: 10px; padding: 4px 9px; }
      }
      @media (max-width: 500px) {
        body.ng-modal-open:not(.ng-modal-is-map) #ng-floatbar {
          visibility: hidden; opacity: 0;
        }
      }

      /* ---- Vista: selector de color ---- */
      .ng-color-row {
        display: grid;
        grid-template-columns: 1fr auto auto auto;
        gap: 6px; align-items: center;
        padding: 6px 8px; background: #1a1a1a;
        border: 1px solid #242424; border-radius: 6px;
        margin-bottom: 5px;
      }
      .ng-color-row span.ng-color-lbl { font-size: .82em; color: #ccc; }
      .ng-color-row input[type=color] {
        width: 32px; height: 24px; border: none; background: none;
        padding: 0; cursor: pointer;
      }
      .ng-color-swatch {
        display: inline-block; width: 12px; height: 12px;
        border-radius: 3px; margin-right: 5px; vertical-align: middle;
        border: 1px solid rgba(255,255,255,.2);
      }
    `;
    document.head.appendChild(st);
  }

  // ============================================================
  //  5) Barra flotante Mapa / Barra
  // ============================================================
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
    const v = quickbarIsVisible();
    btn.innerHTML = v ? '▲ <span>Barra</span>' : '▼ <span>Barra</span>';
    btn.title = v ? 'Ocultar la barra de acciones' : 'Mostrar la barra de acciones';
  }
  function toggleQuickbar() {
    const s = readSettings();
    s.quickbar = !quickbarIsVisible();
    writeSettings(s);
    const qb = document.getElementById('ng-quickbar');
    if (qb) qb.classList.toggle('on', s.quickbar);
    updateFloatPosition();
    syncToggleIcon();
    toast(s.quickbar ? '🎯 Barra visible' : '🎯 Barra oculta');
  }
  function onMapClick() {
    const modal = document.getElementById('ng-modal');
    const isOpen = modal && modal.classList.contains('open');
    const title = document.getElementById('ng-modal-title');
    const isMapOpen = isOpen && title && /mapa/i.test(title.textContent || '');
    if (isMapOpen) {
      const x = document.getElementById('ng-modal-x'); if (x) x.click();
    } else if (window.ngpaws && typeof window.ngpaws.showMap === 'function') {
      window.ngpaws.showMap();
    }
  }
  function addFloatingBar() {
    if (document.getElementById('ng-floatbar')) return;
    const bar = document.createElement('div');
    bar.id = 'ng-floatbar';
    const bMap = document.createElement('button');
    bMap.id = 'ng-btn-map'; bMap.type = 'button';
    bMap.title = 'Abrir o cerrar el mapa';
    bMap.innerHTML = '🗺️ <span>Mapa</span>';
    const bTog = document.createElement('button');
    bTog.id = 'ng-btn-toggle-bar'; bTog.type = 'button';
    bTog.innerHTML = '▼ <span>Barra</span>';
    bar.appendChild(bMap); bar.appendChild(bTog);
    document.body.appendChild(bar);
    bMap.addEventListener('click', e => { e.preventDefault(); e.stopPropagation(); onMapClick(); });
    bTog.addEventListener('click', e => { e.preventDefault(); e.stopPropagation(); toggleQuickbar(); });

    const qb = document.getElementById('ng-quickbar');
    if (qb && window.MutationObserver) {
      new MutationObserver(() => { updateFloatPosition(); syncToggleIcon(); })
        .observe(qb, { attributes: true, attributeFilter: ['class'] });
    }
    window.addEventListener('resize', updateFloatPosition);
    updateFloatPosition();
    syncToggleIcon();
  }

  function watchModal() {
    let last = '';
    setInterval(() => {
      const modal = document.getElementById('ng-modal');
      const isOpen = !!(modal && modal.classList.contains('open'));
      let st = isOpen ? 'open' : 'closed';
      if (isOpen) {
        const t = document.getElementById('ng-modal-title');
        st = (t && /mapa/i.test(t.textContent || '')) ? 'map' : 'other';
      }
      if (st !== last) {
        last = st;
        document.body.classList.toggle('ng-modal-open', isOpen);
        document.body.classList.toggle('ng-modal-is-map', st === 'map');
      }
    }, 150);
  }

  // ============================================================
  //  6) Init
  // ============================================================
  function init() {
    injectStyles();
    patchExits();
    applyBarSettings();
    watchModal();

    let attempts = 30;
    const tryAdd = () => {
      const qb = document.getElementById('ng-quickbar');
      if (qb) {
        const s = readSettings();
        // ── Barra OCULTA por defecto (solo visible si el usuario la activó) ──
        qb.classList.toggle('on', s.quickbar === true);
        addFloatingBar();
        return;
      }
      if (attempts-- > 0) setTimeout(tryAdd, 60);
      else addFloatingBar();
    };
    tryAdd();
  }

  if (document.readyState === 'complete' || document.readyState === 'interactive') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
