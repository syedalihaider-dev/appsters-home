(() => {
  const button = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.nav-links');
  function closeMenu(){button.setAttribute('aria-expanded','false');menu.dataset.open='false';}
  button.addEventListener('click', () => {const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));menu.dataset.open=String(open);});
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',event => {if(event.key==='Escape'){closeMenu();button.focus();}});
  // Static handoff: never simulate a successful lead submission.
  document.querySelectorAll('form').forEach(form => form.addEventListener('submit',event => {
    event.preventDefault();
    if(!form.reportValidity())return;
    form.querySelector('.form-status').textContent='This preview does not send enquiries. Please call +1 (855) 442-2711 or email support@appsters.io to discuss your project.';
  }));
})();
// Preserve the digital-wallet action for the project's destination integration.
document.querySelector('[data-case-study="fintech"]')?.addEventListener('click', () => {
  document.dispatchEvent(new CustomEvent('requestCaseStudy', {detail:{caseStudy:'fintech'}}));
});
