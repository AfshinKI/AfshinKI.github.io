const { test } = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');

function setup(fetch, timers = {}) {
  function element(value = '') {
    return { handlers: {}, value, textContent: '', disabled: false, dataset: {},
      addEventListener(name, fn) { this.handlers[name] = fn; },
      setCustomValidity(message) { this.validationMessage = message; } };
  }
  const inputs = {
    name: element('  Test engineer  '), email: element('engineer@example.com'),
    company: element('Example'), service: element('FPGA & real-time DSP'),
    message: element('  Project details  ')
  };
  const fieldset = element();
  const label = element();
  const button = { ...element(), querySelector: () => label };
  const status = element();
  const required = [inputs.name, inputs.email, inputs.message];
  const form = {
    ...element(), action: 'https://api.web3forms.com/submit', resets: 0,
    querySelector: (s) => s === 'fieldset' ? fieldset : button,
    querySelectorAll: () => required,
    reportValidity: () => required.every(input => !input.validationMessage),
    reset() { this.resets++; Object.values(inputs).forEach(input => { input.value = ''; }); }
  };
  vm.runInNewContext(fs.readFileSync('js/contact.js', 'utf8'), {
    document: { querySelector: s => s === '#contactfrm' ? form : status },
    setTimeout, clearTimeout, ...timers, AbortController, fetch,
    FormData: class {
      constructor() {
        assert.equal(fieldset.disabled, false, 'capture the enquiry before disabling controls');
      }
      *[Symbol.iterator]() {
        yield ['access_key', 'test-public-form-key'];
        yield ['redirect', 'https://innovetron.com/thanks.html'];
        yield ['subject', 'Innovetron — Project enquiry'];
        for (const [name, input] of Object.entries(inputs)) yield [name, input.value];
      }
    }
  });
  return { form, inputs, fieldset, button, label, status,
    submit: () => form.handlers.submit({ preventDefault() {} }) };
}

const accepted = () => ({ ok: true, json: async () => ({ success: true }) });

test('sends a JSON enquiry and confirms only an explicit success', async () => {
  const app = setup(async (url, options) => {
    assert.equal(url, 'https://api.web3forms.com/submit');
    assert.equal(options.method, 'POST');
    assert.equal(options.headers['Content-Type'], 'application/json');
    assert.equal(options.headers.Accept, 'application/json');
    const body = JSON.parse(options.body);
    assert.equal(body.access_key, 'test-public-form-key');
    assert.equal(body.name, 'Test engineer');
    assert.equal(body.email, 'engineer@example.com');
    assert.equal(body.company, 'Example');
    assert.equal(body.service, 'FPGA & real-time DSP');
    assert.equal(body.message, 'Project details');
    assert.equal(body.subject, 'Innovetron — Project enquiry');
    assert.equal('redirect' in body, false);
    return accepted();
  });
  await app.submit();
  assert.equal(app.form.resets, 1);
  assert.equal(app.status.dataset.state, 'success');
  assert.match(app.status.textContent, /has been received/);
  assert.equal(app.fieldset.disabled, false);
  assert.equal(app.button.disabled, false);
  assert.equal(app.label.textContent, 'Send enquiry');
});

const failures = {
  'HTTP error': async () => ({ ok: false }),
  'rate limit': async () => ({ ok: false, status: 429 }),
  'rejected request with HTTP 200': async () => ({ ok: true, json: async () => ({ success: false }) }),
  'missing success flag': async () => ({ ok: true, json: async () => ({}) }),
  'non-boolean success flag': async () => ({ ok: true, json: async () => ({ success: 'true' }) }),
  'null response': async () => ({ ok: true, json: async () => null }),
  'malformed response': async () => ({ ok: true, json: async () => { throw new SyntaxError(); } }),
  'network failure': async () => { throw new TypeError('Offline'); }
};

for (const [name, fetch] of Object.entries(failures)) {
  test(`${name} preserves the enquiry and allows retry`, async () => {
    const app = setup(fetch);
    await app.submit();
    assert.equal(app.form.resets, 0);
    assert.equal(app.inputs.message.value, '  Project details  ');
    assert.equal(app.status.dataset.state, 'error');
    assert.match(app.status.textContent, /couldn’t confirm delivery/);
    assert.equal(app.fieldset.disabled, false);
    assert.equal(app.button.disabled, false);
  });
}

test('a stalled request aborts at the deadline and preserves the enquiry', async () => {
  let expire;
  let cleared = false;
  let signal;
  const app = setup((url, options) => {
    signal = options.signal;
    return new Promise((resolve, reject) => {
      signal.addEventListener('abort', () => reject(new Error('Aborted')));
    });
  }, {
    setTimeout(callback, delay) { assert.equal(delay, 20000); expire = callback; return 7; },
    clearTimeout(id) { assert.equal(id, 7); cleared = true; }
  });
  const pending = app.submit();
  expire();
  await pending;
  assert.equal(signal.aborted, true);
  assert.equal(cleared, true);
  assert.equal(app.form.resets, 0);
  assert.equal(app.button.disabled, false);
  assert.equal(app.status.dataset.state, 'error');
});

test('locks fields and blocks duplicate sends until the response arrives', async () => {
  let finish;
  let calls = 0;
  const app = setup(() => { calls++; return new Promise(resolve => { finish = resolve; }); });
  const first = app.submit();
  assert.equal(app.fieldset.disabled, true);
  assert.equal(app.button.disabled, true);
  assert.equal(app.label.textContent, 'Sending…');
  await app.submit();
  assert.equal(calls, 1);
  finish(accepted());
  await first;
  assert.equal(app.fieldset.disabled, false);
});

test('a failed enquiry can be retried with its original fields', async () => {
  let calls = 0;
  const app = setup(async () => ++calls === 1 ? { ok: false } : accepted());
  await app.submit();
  await app.submit();
  assert.equal(calls, 2);
  assert.equal(app.form.resets, 1);
  assert.equal(app.status.dataset.state, 'success');
});

test('whitespace-only required fields are rejected and can be corrected', async () => {
  let calls = 0;
  const app = setup(async () => { calls++; return accepted(); });
  app.inputs.message.value = ' \n ';
  await app.submit();
  assert.equal(calls, 0);
  assert.match(app.inputs.message.validationMessage, /complete/);
  app.inputs.message.value = 'New project';
  app.inputs.message.handlers.input();
  assert.equal(app.inputs.message.validationMessage, '');
  await app.submit();
  assert.equal(calls, 1);
});

test('static form has a configured public key and an Innovetron fallback page', () => {
  const html = fs.readFileSync('index.html', 'utf8');
  const form = html.match(/<form\b[^>]*id="contactfrm"[\s\S]*?<\/form>/)[0];
  assert.match(form, /action="https:\/\/api\.web3forms\.com\/submit"/);
  assert.match(form, /name="access_key" value="[a-f0-9-]{36}"/);
  assert.match(form, /name="redirect" value="https:\/\/innovetron\.com\/thanks.html"/);
  assert.match(form, /type="email"[^>]*required/);
  assert.match(form, /name="botcheck"[^>]*hidden/);
  assert.doesNotMatch(form, /Formspree|mailto:|@gmail\.com/);
  assert.ok(fs.existsSync('thanks.html'));
});

test('starting a new enquiry clears the previous confirmation', async () => {
  const app = setup(async () => accepted());
  await app.submit();
  app.inputs.name.value = 'Another enquiry';
  app.form.handlers.input();
  assert.equal(app.status.textContent, '');
  assert.equal(app.status.dataset.state, undefined);
});
