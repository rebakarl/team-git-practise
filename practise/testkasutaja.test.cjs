const test = require('node:test');
const assert = require('node:assert/strict');
const { isValidMinutes } = require('./alex.cjs');

test('accepts valid minutes in range', () => {
  assert.equal(isValidMinutes(45), true);
  assert.equal(isValidMinutes(90), true);
});

test('rejects negative numbers, zero, strings and decimals', () => {
  assert.equal(isValidMinutes(0), false);
  assert.equal(isValidMinutes(-10), false);
  assert.equal(isValidMinutes('60'), false);
  assert.equal(isValidMinutes(45.5), false);
});

test('handles boundary values: exactly 1 and exactly 180', () => {
  assert.equal(isValidMinutes(1), true);
  assert.equal(isValidMinutes(180), true);
  assert.equal(isValidMinutes(181), false);
});
