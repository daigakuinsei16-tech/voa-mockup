const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.site-nav');
const dropdown = document.querySelector('.nav-dropdown');
const dropdownButton = document.querySelector('.dropdown-toggle');

menuButton?.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});

dropdownButton?.addEventListener('click', () => {
  const open = dropdown.classList.toggle('open');
  dropdownButton.setAttribute('aria-expanded', String(open));
});

document.addEventListener('click', event => {
  if (event.target.closest('.nav-dropdown')) return;
  dropdown?.classList.remove('open');
  dropdownButton?.setAttribute('aria-expanded', 'false');
});

document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  dropdown?.classList.remove('open');
  dropdownButton?.setAttribute('aria-expanded', 'false');
  navigation?.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
});

document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    if (document.body.classList.contains('page-content-editing')) return;
    const item = button.closest('.faq-item');
    const open = item.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
  });
});
