(() => {
  function initializePage() {
    const menuButton = document.querySelector('[aria-label="Toggle navigation"]');
    const menu = document.querySelector('header nav');

    if (menuButton && menu) {
      menuButton.addEventListener('click', () => {
        const isOpen = menuButton.getAttribute('aria-expanded') !== 'true';
        menuButton.setAttribute('aria-expanded', String(isOpen));
        menu.dataset.open = String(isOpen);
      });

      menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
        menu.dataset.open = 'false';
        menuButton.setAttribute('aria-expanded', 'false');
      }));
    }

    document.querySelectorAll('form[data-source-form]').forEach((form) => {
      form.addEventListener('submit', async (event) => {
        event.preventDefault();
        if (!form.reportValidity()) return;

        const submitButton = form.querySelector('[type="submit"]');
        const originalLabel = submitButton?.textContent;
        let status = form.querySelector('[data-submit-status]');

        if (!status) {
          status = document.createElement('p');
          status.dataset.submitStatus = 'true';
          status.setAttribute('role', 'status');
          status.setAttribute('aria-live', 'polite');
          status.style.cssText = 'margin:10px 0 0;font-size:14px;line-height:1.5';
          form.append(status);
        }

        const values = Object.fromEntries(new FormData(form).entries());
        values.pageUrl = window.location.href;
        if (values.phone && values.countryCode) values.phone = `${values.countryCode} ${values.phone}`;

        if (submitButton) {
          submitButton.disabled = true;
          submitButton.textContent = 'Sending…';
        }
        status.textContent = '';

        try {
          const response = await fetch('/api/lp-mobile-app-developers', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values),
          });

          if (!response.ok) throw new Error('Submission failed. Please try again or call us.');
          window.location.assign('/lp/mobile-app-developers/thank-you');
        } catch (error) {
          status.style.color = '#ff8c8c';
          status.textContent = error.message || 'Could not send your details. Please try again.';
          if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = originalLabel;
          }
        }
      });
    });

    document.querySelector('[data-case-study="fintech"]')?.addEventListener('click', () => {
      document.dispatchEvent(new CustomEvent('requestCaseStudy', { detail: { caseStudy: 'fintech' } }));
    });

    document.body.dataset.interactionsReady = 'true';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePage, { once: true });
  } else {
    initializePage();
  }
})();
