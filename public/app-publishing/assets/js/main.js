/* Appsters – App Publishing LP : behaviour */
(function () {
  'use strict';

  var CFG = window.LP_CONFIG || {};
  var endpoint = CFG.endpoint || 'php/send-lead.php';
  var thankYouUrl = CFG.thankYouUrl || 'thank-you.html';
  var leadEvent = CFG.leadEventName || 'lead_form_submit';
  window.dataLayer = window.dataLayer || [];

  var store = {
    get: function (k) { try { return window.sessionStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { window.sessionStorage.setItem(k, v); } catch (e) { /* storage blocked */ } }
  };

  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  /* ---------- Year ---------- */
  var yearEl = $('#year');
  if (yearEl) { yearEl.textContent = String(new Date().getFullYear()); }

  /* ---------- Mobile nav ---------- */
  var navToggle = $('#navToggle');
  var nav = $('#mainNav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    $$('a', nav).forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Open menu');
      });
    });
  }

  /* ---------- UTM / click-ID capture ---------- */
  var TRACK_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'gbraid', 'wbraid', 'fbclid', 'msclkid'];
  (function captureParams() {
    var params;
    try { params = new URLSearchParams(window.location.search); } catch (e) { return; }
    TRACK_KEYS.forEach(function (k) {
      var v = params.get(k);
      if (v) { store.set('lp_' + k, v.slice(0, 250)); }
    });
    if (!store.get('lp_landing')) { store.set('lp_landing', window.location.href.slice(0, 500)); }
    if (!store.get('lp_referrer') && document.referrer) { store.set('lp_referrer', document.referrer.slice(0, 500)); }
  })();

  /* ---------- Modal ---------- */
  var modal = $('#leadModal');
  var lastFocus = null;
  var formTouched = false;

  function openModal(source) {
    if (!modal || !modal.hidden) { return; }
    lastFocus = document.activeElement;
    var ctaField = $('input[name="cta"]', modal);
    if (ctaField) { ctaField.value = 'popup:' + (source || 'unknown'); }
    modal.hidden = false;
    document.body.classList.add('modal-open');
    var first = $('input:not(.hp)', modal);
    if (first) { window.setTimeout(function () { first.focus(); }, 50); }
    store.set('lp_popup_seen', '1');
  }

  function closeModal() {
    if (!modal || modal.hidden) { return; }
    modal.hidden = true;
    document.body.classList.remove('modal-open');
    if (lastFocus && typeof lastFocus.focus === 'function') { lastFocus.focus(); }
  }

  if (modal) {
    $$('[data-close]', modal).forEach(function (el) { el.addEventListener('click', closeModal); });
    document.addEventListener('keydown', function (e) {
      if (modal.hidden) { return; }
      if (e.key === 'Escape') { closeModal(); return; }
      if (e.key === 'Tab') {
        var focusables = $$('button, input:not(.hp), select, textarea, a[href]', modal).filter(function (el) { return !el.disabled && el.offsetParent !== null; });
        if (!focusables.length) { return; }
        var first = focusables[0], last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
  }

  $$('.js-open-form').forEach(function (btn) {
    btn.addEventListener('click', function () {
      window.dataLayer.push({ event: 'cta_click', cta_source: btn.getAttribute('data-source') || 'unknown' });
      openModal(btn.getAttribute('data-source') || 'cta');
    });
  });

  // Auto-open once per session, unless the visitor is already filling a form
  var delay = Number(CFG.popupDelay);
  if (modal && delay > 0 && !store.get('lp_popup_seen')) {
    window.setTimeout(function () {
      if (!formTouched && modal.hidden && !store.get('lp_popup_seen')) { openModal('auto_' + Math.round(delay / 1000) + 's'); }
    }, delay);
  }

  /* ---------- Zendesk ---------- */
  var zdKey = (CFG.zendeskKey || '').trim();
  var zdLoaded = false;
  var zdPendingOpen = false;

  function zdOpen() {
    if (typeof window.zE !== 'function') { return false; }
    try { window.zE('messenger', 'show'); window.zE('messenger', 'open'); return true; } catch (e) { /* not messaging */ }
    try { window.zE('webWidget', 'show'); window.zE('webWidget', 'open'); return true; } catch (e2) { /* not classic */ }
    return false;
  }

  if (zdKey) {
    var zs = document.createElement('script');
    zs.id = 'ze-snippet';
    zs.async = true;
    zs.src = 'https://static.zdassets.com/ekr/snippet.js?key=' + encodeURIComponent(zdKey);
    zs.onload = function () {
      zdLoaded = true;
      if (zdPendingOpen) { window.setTimeout(zdOpen, 300); }
    };
    zs.onerror = function () { zdLoaded = false; zdKey = ''; if (zdPendingOpen && modal) { openModal('chat_fallback'); } };
    document.body.appendChild(zs);
  }

  $$('.js-chat').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      window.dataLayer.push({ event: 'chat_click' });
      if (zdKey) {
        if (zdLoaded && zdOpen()) { return; }
        if (!zdLoaded) { zdPendingOpen = true; return; }
      }
      if (modal) { openModal('chat_fallback'); } else { window.location.href = 'tel:+18557991171'; }
    });
  });

  /* ---------- Phone click tracking ---------- */
  $$('.js-phone').forEach(function (a) {
    a.addEventListener('click', function () { window.dataLayer.push({ event: 'phone_click' }); });
  });

  /* ---------- Portfolio tabs ---------- */
  var tabs = $$('.port-tab');
  function activateTab(i, focus) {
    tabs.forEach(function (t, idx) {
      var on = idx === i;
      t.classList.toggle('is-active', on);
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.setAttribute('tabindex', on ? '0' : '-1');
      var panel = document.getElementById(t.getAttribute('aria-controls'));
      if (panel) { panel.hidden = !on; panel.classList.toggle('is-active', on); }
    });
    if (focus && tabs[i]) { tabs[i].focus(); }
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { activateTab(i, false); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { e.preventDefault(); activateTab((i + 1) % tabs.length, true); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); activateTab((i - 1 + tabs.length) % tabs.length, true); }
    });
  });

  /* ---------- Stat count-up ---------- */
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var statEls = $$('.stat-num[data-count]');
  if (statEls.length && 'IntersectionObserver' in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) { return; }
        var el = entry.target;
        io.unobserve(el);
        var target = parseFloat(el.getAttribute('data-count')) || 0;
        var dec = parseInt(el.getAttribute('data-decimals') || '0', 10);
        var suffix = el.getAttribute('data-suffix') || '';
        var start = null, dur = 1200;
        function tick(ts) {
          if (start === null) { start = ts; }
          var p = Math.min((ts - start) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = (target * eased).toFixed(dec) + suffix;
          if (p < 1) { window.requestAnimationFrame(tick); }
        }
        window.requestAnimationFrame(tick);
      });
    }, { threshold: 0.4 });
    statEls.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Lead forms ---------- */
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  function setError(input, msg) {
    input.classList.add('invalid');
    input.setAttribute('aria-invalid', 'true');
    var holder = input.parentNode;
    var err = $('.field-error', holder);
    if (!err) {
      err = document.createElement('span');
      err.className = 'field-error';
      err.id = input.id + '_err';
      holder.appendChild(err);
      input.setAttribute('aria-describedby', err.id);
    }
    err.textContent = msg;
  }

  function clearError(input) {
    input.classList.remove('invalid');
    input.removeAttribute('aria-invalid');
    var err = $('.field-error', input.parentNode);
    if (err) { err.textContent = ''; }
  }

  function validate(form) {
    var ok = true;
    var firstBad = null;
    $$('input[required], select[required], textarea[required]', form).forEach(function (el) {
      var v = (el.value || '').trim();
      var msg = '';
      if (!v) {
        msg = el.tagName === 'SELECT' ? 'Choose an option.' : 'This field is required.';
      } else if (el.type === 'email' && !EMAIL_RE.test(v)) {
        msg = 'Enter a valid email address, like name@company.com.';
      } else if (el.type === 'tel' && v.replace(/\D/g, '').length < 7) {
        msg = 'Enter a phone number with at least 7 digits.';
      } else if (el.name === 'name' && v.length < 2) {
        msg = 'Enter your full name.';
      } else if (el.name === 'message' && v.length < 10) {
        msg = 'Add a short description of your app (at least 10 characters).';
      }
      if (msg) { setError(el, msg); ok = false; if (!firstBad) { firstBad = el; } }
      else { clearError(el); }
    });
    if (firstBad) { firstBad.focus(); }
    return ok;
  }

  $$('.lead-form').forEach(function (form) {
    form.addEventListener('input', function (e) {
      formTouched = true;
      if (e.target.classList && e.target.classList.contains('invalid')) { clearError(e.target); }
    });
    form.addEventListener('change', function (e) {
      if (e.target.classList && e.target.classList.contains('invalid')) { clearError(e.target); }
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = $('.form-status', form);
      var btn = $('button[type="submit"]', form);
      if (status) { status.textContent = ''; status.className = 'form-status'; }
      if (!validate(form)) { return; }

      var fd = new FormData(form);
      fd.append('form_id', form.getAttribute('data-form-id') || 'form');
      fd.append('page_url', window.location.href.slice(0, 500));
      TRACK_KEYS.concat(['landing', 'referrer']).forEach(function (k) {
        var v = store.get('lp_' + k);
        if (v) { fd.append(k, v); }
      });

      var btnText = btn ? btn.textContent : '';
      if (btn) { btn.disabled = true; btn.textContent = 'Sending...'; }

      fetch(endpoint, { method: 'POST', body: fd, headers: { 'Accept': 'application/json' }, credentials: 'same-origin' })
        .then(function (res) {
          return res.text().then(function (txt) {
            var data = null;
            try { data = JSON.parse(txt); } catch (err) { data = null; }
            if (!res.ok || !data || data.ok !== true) {
              var msg = (data && data.message) ? data.message : 'We could not send your details. Call +1 (855) 799 1171 or try again.';
              throw new Error(msg);
            }
            return data;
          });
        })
        .then(function () {
          var first = String(fd.get('name') || '').trim().split(/\s+/)[0] || '';
          store.set('lp_lead_name', first.slice(0, 40));
          store.set('lp_popup_seen', '1');
          if (status) { status.textContent = 'Sent. Taking you to the next step...'; status.classList.add('is-ok'); }

          var redirected = false;
          function go() { if (!redirected) { redirected = true; window.location.href = thankYouUrl; } }
          window.dataLayer.push({
            event: leadEvent,
            form_id: form.getAttribute('data-form-id') || 'form',
            lead_app_type: String(fd.get('app_type') || ''),
            eventCallback: go,
            eventTimeout: 1500
          });
          window.setTimeout(go, 1600);
        })
        .catch(function (err) {
          if (status) { status.textContent = err && err.message ? err.message : 'Something went wrong. Please try again.'; status.classList.add('is-error'); }
          if (btn) { btn.disabled = false; btn.textContent = btnText; }
        });
    });
  });
})();
