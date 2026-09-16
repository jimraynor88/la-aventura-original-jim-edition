/* ============================================================
   extra-dock.js — Modo acoplado para la botonería (Edición Jim)
   ------------------------------------------------------------
   Añade la posibilidad de que la botonería viva DEBAJO del texto
   de la aventura en lugar de flotar sobre él.

   · Módulo independiente: puedes quitarlo borrando el <script>
     correspondiente del index.html y todo vuelve al modo overlay.
   · Por defecto: DOCKED (debajo del texto).
   · Solo 'overlay' explícito en settings.barPosition fuerza el
     modo antiguo.
   · Cuando la quickbar se oculta, el .text se expande y ocupa
     su hueco automáticamente.
   ============================================================ */

(function () {
  'use strict';

  const SETTINGS_KEY = 'ngpaws_settings';

  function readSettings() {
    try { return JSON.parse(localStorage.getItem(SETTINGS_KEY)) || {}; }
    catch (_) { return {}; }
  }

  // ------------------------------------------------------------
  //  CSS del modo docked
  // ------------------------------------------------------------
  function injectStyles() {
    if (document.getElementById('ng-dock-styles')) return;

    const st = document.createElement('style');
    st.id = 'ng-dock-styles';
    st.textContent = `
      /* ---- Barra flotante en su franja (arriba del input) ---- */
      body.qb-docked #ng-floatbar {
        bottom: calc(7% + 6px) !important;
        transition: bottom .22s ease, opacity .15s, visibility .15s;
      }

      /* ---- Quickbar justo encima de la floatbar ---- */
      body.qb-docked #ng-quickbar {
        bottom: calc(7% + 6px + var(--qb-float-h, 32px) + 4px) !important;
        background: #0a0a0a;
      }

      /* ---- El texto reserva hueco para la floatbar (siempre visible) ---- */
      body.qb-docked .text {
        bottom: calc(7% + 6px + var(--qb-float-h, 32px) + 8px) !important;
      }

      /* ---- Si además la quickbar está visible, reserva más hueco ---- */
      body.qb-docked.qb-visible .text {
        bottom: calc(7% + 6px + var(--qb-float-h, 32px) + 8px + var(--qb-height, 78px)) !important;
      }

      /* ---- La floatbar no debe subir aunque la quickbar esté visible ---- */
      body.qb-docked.qb-visible #ng-floatbar {
        bottom: calc(7% + 6px) !important;
      }
    `;
    document.head.appendChild(st);
  }

  // ------------------------------------------------------------
  //  Métricas dinámicas (para que el calc() funcione bien)
  // ------------------------------------------------------------
  function updateMetrics() {
    if (!document.body.classList.contains('qb-docked')) return;

    const input    = document.querySelector('.input');
    const floatbar = document.getElementById('ng-floatbar');
    const qb       = document.getElementById('ng-quickbar');

    const ih = input    ? Math.ceil(input.getBoundingClientRect().height)    : 0;
    const fh = floatbar ? Math.ceil(floatbar.getBoundingClientRect().height) : 0;
    const qh = (qb && qb.classList.contains('on'))
              ? Math.ceil(qb.getBoundingClientRect().height) : 0;

    const root = document.documentElement;
    root.style.setProperty('--ng-input-h', ih + 'px');
    root.style.setProperty('--qb-float-h', fh + 'px');
    root.style.setProperty('--qb-height',  qh + 'px');
  }

  // ------------------------------------------------------------
  //  Aplicar el modo (docked por defecto)
  // ------------------------------------------------------------
  function applyDockMode() {
    const s = readSettings();
    // DOCKED por defecto. Solo 'overlay' explícito → modo flotante antiguo.
    const docked = s.barPosition !== 'overlay';
    document.body.classList.toggle('qb-docked', docked);
    updateMetrics();
  }

  window.NG_applyDockMode = applyDockMode;

  // ------------------------------------------------------------
  //  Vigilar cambios de la quickbar (mostrar/ocultar) y resize
  // ------------------------------------------------------------
  function watchQuickbar() {
    const qb = document.getElementById('ng-quickbar');
    if (!qb) { setTimeout(watchQuickbar, 100); return; }

    if (window.MutationObserver) {
      new MutationObserver(updateMetrics)
        .observe(qb, { attributes: true, attributeFilter: ['class'] });
    }
    window.addEventListener('resize', updateMetrics);
  }

  // ------------------------------------------------------------
  //  Init
  // ------------------------------------------------------------
  function init() {
    injectStyles();
    applyDockMode();
    watchQuickbar();
    console.log('[extra-dock] Modo acoplado activo.');
  }

  if (document.readyState === 'complete' ||
      document.readyState === 'interactive') {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }
})();
