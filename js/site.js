'use strict';
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
function closeMenu() {
  nav.classList.remove('is-open');
  menu.setAttribute('aria-expanded', 'false');
}
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('is-open', open);
});
nav.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && nav.classList.contains('is-open')) {
    closeMenu();
    menu.focus();
  }
});
document.addEventListener('click', (event) => {
  if (!event.target.closest('.site-header')) closeMenu();
});
window.matchMedia('(min-width: 901px)').addEventListener('change', closeMenu);
document.querySelectorAll('[data-service]').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('#service').value = link.dataset.service;
  });
});
document.querySelector('#year').textContent = new Date().getFullYear();
const form = document.querySelector('#contactfrm');
const status = document.querySelector('#form-status');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const button = form.querySelector('button[type="submit"]');
  if (button.disabled) return;
  button.disabled = true;
  status.textContent = 'Sending your enquiry…';
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);
  try {
    const response = await fetch(form.action, {
      method: 'POST', body: new FormData(form),
      headers: { Accept: 'application/json' }, signal: controller.signal
    });
    if (!response.ok) throw new Error('Submission failed');
    status.textContent = 'Thank you. Your enquiry has been sent. We’ll respond using the email you provided.';
    form.reset();
  } catch {
    status.textContent = 'We couldn’t confirm delivery. Your message is still here. Please try again in a moment.';
  } finally {
    clearTimeout(timeout);
    button.disabled = false;
  }
});
