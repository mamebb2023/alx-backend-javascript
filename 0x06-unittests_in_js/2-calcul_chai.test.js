const { expect } = require('chai');
const { describe, it } = require('mocha');

const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
    describe('Addition', () => {
        it('rounding 1, 3, with SUM returns 4', () => {
            expect(calculateNumber('SUM', 1, 3)).to.equal(4);
        });
        it('rounding 1, 3.7, with SUM returns 5', () => {
            expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
        });
        it('rounding 1.2, 3.7, with SUM and returns 5', () => {
            expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
        });
        it('rounding 1.5, 3.7, with SUM and returns 6', () => {
            expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
        });
        it('rounding 1.4, 4.5, with SUM returns 6', () => {
            expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
        });
        it('rounding -1.3, -3.7, with SUM and returns -5', () => {
            expect(calculateNumber('SUM', -1.3, -3.7)).to.equal(-5);
        });
    });
    describe('SUBTRACTION', () => {
        it('rounding 1, 2, with SUBTRACT returns -1', () => {
            expect(calculateNumber('SUBSTRACT', 1, 2)).to.equal(-1);
        });
        it('rounding 1, 3.7, with SUBTRACT returns -3', () => {
            expect(calculateNumber('SUBSTRACT', 1, 3.7)).to.equal(-1);
        });
        it('rounding 1.2, 3.7, with SUBTRACT and returns -3', () => {
            expect(calculateNumber('SUBSTRACT', 1.2, 3.7)).to.equal(-3);
        });
        it('rounding 1.5, 3.7, with SUBTRACT and returns -2', () => {
            expect(calculateNumber('SUBSTRACT', 1.5, 3.7)).to.equal(-2);
        });
        it('rounding 1.4, 4.5, with SUM returns -4', () => {
            expect(calculateNumber('SUBSTRACT', 1.4, 4.5)).to.equal(-4);
        });
        it('rounding -1.3, -3.7, with SUBTRACT and returns 3', () => {
            expect(calculateNumber('SUBSTRACT', -1.3, -3.7)).to.equal(3);
        });
    });
    describe('DIVIDION', () => {
        it('rounding 1, 2, with DIVIDE returns 0.5', () => {
            expect(calculateNumber('DIVIDE', 1, 2)).to.equal(0.5);
        });
        it('rounding 6, 3.2, with DIVIDE returns 2', () => {
            expect(calculateNumber('DIVIDE', 6, 3.2)).to.equal(2);
        });
        it('rounding 3.1, 0.5, with DIVIDE and returns 3', () => {
            expect(calculateNumber('DIVIDE', 3.1, 0.5)).to.equal(3);
        });
        it('rounding 3, -2.7, with DIVIDE and returns -1', () => {
            expect(calculateNumber('DIVIDE', 3, -2.7)).to.equal(-1);
        });
        it('rounding 1.4, 4.5, with SUM returns 0.2', () => {
            expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
        });
        it('rounding -1.3, 0, with DIVIDE and returns "Error"', () => {
            expect(calculateNumber('DIVIDE', -1.3, 0)).to.equal('Error');
        });
    });
});