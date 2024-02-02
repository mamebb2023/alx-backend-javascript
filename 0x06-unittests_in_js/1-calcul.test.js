const assert = require('assert');
const { it, describe } = require('mocha');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    describe('Addition', () => {
        it('rounding 1, 3, with SUM returns 4', () => {
            assert.equal(calculateNumber('SUM', 1, 3), 4);
        });
        it('rounding 1, 3.7, with SUM returns 5', () => {
            assert.equal(calculateNumber('SUM', 1, 3.7), 5);
        });
        it('rounding 1.2, 3.7, with SUM and returns 5', () => {
            assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
        });
        it('rounding 1.5, 3.7, with SUM and returns 6', () => {
            assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
        });
        it('rounding 1.4, 4.5, with SUM returns 6', () => {
            assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
        });
        it('rounding -1.3, -3.7, with SUM and returns -5', () => {
            assert.equal(calculateNumber('SUM', -1.3, -3.7), -5);
        });
    });
    describe('SUBTRACTION', () => {
        it('rounding 1, 2, with SUBTRACT returns -1', () => {
            assert.equal(calculateNumber('SUBTRACT', 1, 2), -1);
        });
        it('rounding 1, 3.7, with SUBTRACT returns -3', () => {
            assert.equal(calculateNumber('SUBTRACT', 1, 3.7), -3);
        });
        it('rounding 1.2, 3.7, with SUBTRACT and returns -3', () => {
            assert.equal(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
        });
        it('rounding 1.5, 3.7, with SUBTRACT and returns -2', () => {
            assert.equal(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
        });
        it('rounding 1.4, 4.5, with SUM returns -4', () => {
            assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        });
        it('rounding -1.3, -3.7, with SUBTRACT and returns 3', () => {
            assert.equal(calculateNumber('SUBTRACT', -1.3, -3.7), 3);
        });
    });
    describe('DIVIDION', () => {
        it('rounding 1, 2, with DIVIDE returns 0.5', () => {
            assert.equal(calculateNumber('DIVIDE', 1, 2), 0.5);
        });
        it('rounding 6, 3.2, with DIVIDE returns 2', () => {
            assert.equal(calculateNumber('DIVIDE', 6, 3.2), 2);
        });
        it('rounding 3.1, 0.5, with DIVIDE and returns 3', () => {
            assert.equal(calculateNumber('DIVIDE', 3.1, 0.5), 3);
        });
        it('rounding 3, -2.7, with DIVIDE and returns -1', () => {
            assert.equal(calculateNumber('DIVIDE', 3, -2.7), -1);
        });
        it('rounding 1.4, 4.5, with SUM returns 0.2', () => {
            assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        });
        it('rounding -1.3, 0, with DIVIDE and returns "Error"', () => {
            assert.equal(calculateNumber('DIVIDE', -1.3, 0), 'Error');
        });
    });
});