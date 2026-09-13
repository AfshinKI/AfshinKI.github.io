const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');

test('every service enquiry link has a selectable form option', () => {
  const html = fs.readFileSync('index.html', 'utf8');
  const select = html.match(/<select\b[^>]*id="service"[^>]*>([\s\S]*?)<\/select>/);
  assert.ok(select, 'Service selector must exist');
  const decode = value => value.replaceAll('&amp;', '&').trim();
  const options = [...select[1].matchAll(/<option\b[^>]*>([^<]*)<\/option>/g)].map(match => decode(match[1]));
  const services = [...html.matchAll(/data-service="([^"]+)"/g)].map(match => decode(match[1]));
  assert.ok(services.length > 0, 'Service enquiry links must exist');
  for (const service of services) {
    assert.ok(options.includes(service), `Enquiry option missing for ${service}`);
  }
});
