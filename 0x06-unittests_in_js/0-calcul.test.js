const assert = require('assert');
const { it, describe } = require('mocha');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('rounding 1, 3 and returns there sum 4', () => {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('rounding 1, 3.7 and returns there sum 5', () => {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('rounding 1.2, 3.7 and returns there sum 5', () => {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it('rounding 1.5, 3.7 and returns there sum 6', () => {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
  it('rounding -1.3, -3.7 and returns there sum -5', () => {
    assert.equal(calculateNumber(-1.3, -3.7), -5);
  });
});