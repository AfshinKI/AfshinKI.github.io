'use strict';

(() => {
  const form = document.querySelector('#contactfrm');
  if (!form) return;

  const fields = form.querySelector('fieldset');
  const button = form.querySelector('button[type="submit"]');
  const buttonLabel = button.querySelector('[data-submit-label]');
  const status = document.querySelector('#form-status');
  const requiredFields = form.querySelectorAll('[required]');
  let sending = false;

  requiredFields.forEach((field) => {
    field.addEventListener('input', () => field.setCustomValidity(''));
  });
  form.addEventListener('input', () => {
    if (!sending && status.dataset.state === 'success') {
      status.textContent = '';
      delete status.dataset.state;
    }
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (sending) return;

    requiredFields.forEach((field) => {
      field.setCustomValidity(field.value.trim() ? '' : 'Please complete this field.');
    });
    if (!form.reportValidity()) return;

    // Capture before disabling the fields: disabled controls are omitted by FormData.
    const payload = Object.fromEntries(new FormData(form));
    for (const key of ['name', 'email', 'company', 'message']) {
      if (typeof payload[key] === 'string') payload[key] = payload[key].trim();
    }
    // The native POST fallback uses our thank-you page; JavaScript stays on this page.
    delete payload.redirect;

    sending = true;
    fields.disabled = true;
    button.disabled = true;
    buttonLabel.textContent = 'Sending…';
    status.dataset.state = 'sending';
    status.textContent = 'Sending your enquiry…';
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal
      });
      if (!response.ok) throw new Error('Submission was not accepted');
      const result = await response.json();
      if (result?.success !== true) throw new Error('Submission was not confirmed');

      form.reset();
      status.dataset.state = 'success';
      status.textContent = 'Thank you. Your enquiry has been received. We’ll respond using the email you provided.';
    } catch {
      // Never clear an unconfirmed enquiry or expose provider errors to visitors.
      status.dataset.state = 'error';
      status.textContent = 'We couldn’t confirm delivery. Your message is still here. Please try again in a moment.';
    } finally {
      clearTimeout(timeout);
      sending = false;
      fields.disabled = false;
      button.disabled = false;
      buttonLabel.textContent = 'Send enquiry';
    }
  });
})();
