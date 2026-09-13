const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');

// Guard the actual regression: formatting inserted raw newlines inside a
// quoted font URL, causing browsers to discard the stylesheet on fresh loads.
test('CSS quoted strings contain no unescaped newlines', () => {
  const css = fs.readFileSync('css/style1.css', 'utf8');
  let quote = null;
  let comment = false;
  for (let i = 0; i < css.length; i++) {
    const c = css[i];
    if (comment) {
      if (c === '*' && css[i + 1] === '/') { comment = false; i++; }
      continue;
    }
    if (quote) {
      if (c === '\\') { i++; continue; }
      assert.ok(c !== '\n' && c !== '\r', `Raw newline inside CSS string at offset ${i}`);
      if (c === quote) quote = null;
    } else if (c === '/' && css[i + 1] === '*') {
      comment = true; i++;
    } else if (c === '"' || c === "'") {
      quote = c;
    }
  }
  assert.equal(quote, null, 'Unclosed CSS string');
});
