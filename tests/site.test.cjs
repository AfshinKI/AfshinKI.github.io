const { test } = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');

function setup(fetch) {
  const elements = {};
  function element() {
    return { handlers: {}, value: '', textContent: '', disabled: false,
      addEventListener(name, fn) { this.handlers[name] = fn; },
      setAttribute() {}, classList: { remove() {} } };
  }
  for (const id of ['.menu-toggle', '#main-nav', '#service', '#year', '#contactfrm', '#form-status']) elements[id] = element();
  const button = element();
  const form = elements['#contactfrm'];
  form.action = 'https://formspree.io/f/moqgyplv';
  form.value = 'Project details';
  form.reset = () => { form.value = ''; };
  form.querySelector = () => button;
  vm.runInNewContext(fs.readFileSync('js/site.js', 'utf8'), {
    document: { querySelector: s => elements[s], querySelectorAll: () => [], addEventListener() {} },
    window: { matchMedia: () => ({ addEventListener() {} }) },
    Date, setTimeout, clearTimeout, AbortController, FormData: class {}, fetch
  });
  return { form, button, status: elements['#form-status'], submit: () => form.handlers.submit({ preventDefault() {} }) };
}

test('successful enquiry clears fields and reports delivery', async () => {
  const app = setup(async (url, options) => {
    assert.equal(url, 'https://formspree.io/f/moqgyplv');
    assert.equal(options.method, 'POST');
    assert.equal(options.headers.Accept, 'application/json');
    return { ok: true };
  });
  await app.submit();
  assert.equal(app.form.value, '');
  assert.match(app.status.textContent, /has been sent/);
  assert.equal(app.button.disabled, false);
});

for (const failure of ['http', 'network', 'timeout']) {
  test(`${failure} failure preserves the enquiry and allows retry`, async () => {
    const app = setup(async () => {
      if (failure === 'http') return { ok: false };
      throw new Error(failure);
    });
    await app.submit();
    assert.equal(app.form.value, 'Project details');
    assert.match(app.status.textContent, /couldn’t confirm delivery/);
    assert.equal(app.button.disabled, false);
  });
}

test('duplicate submissions are blocked while a request is pending', async () => {
  let finish;
  let calls = 0;
  const app = setup(() => { calls++; return new Promise(resolve => { finish = resolve; }); });
  const first = app.submit();
  assert.equal(app.button.disabled, true);
  await app.submit();
  assert.equal(calls, 1);
  finish({ ok: true });
  await first;
  assert.equal(app.button.disabled, false);
});
