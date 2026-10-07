const test = require('node:test');
const assert = require('node:assert/strict');
const { isValidTitle } = require('./karl.cjs');

test('accepts a normal title', () => {
  assert.equal(isValidTitle('Learn Next.js'), true);
});

test('rejects an empty title or whitespace-only title', () => {
  assert.equal(isValidTitle(''), false);
  assert.equal(isValidTitle('   '), false);
  assert.equal(isValidTitle(null), false);
});

test('handles boundary conditions: 1 char and exactly 80 chars', () => {
  assert.equal(isValidTitle('A'), true);
  const title80 = 'a'.repeat(80);
  const title81 = 'a'.repeat(81);
  assert.equal(isValidTitle(title80), true);
  assert.equal(isValidTitle(title81), false);
});
