const assert = require('assert');
const { it, describe } = require('mocha');
const calculateNumber = require('./0-calcul');

describe("calculateNumber", () => {
    it("rounds given two numbers and returns there sum", () => {
        assert.equal(calculateNumber(1, 3), 4);
    });
    it("rounds given two numbers and returns there sum", () => {
        assert.equal(calculateNumber(1, 3.7), 5);
    });
    it("rounds given two numbers and returns there sum", () => {
        assert.equal(calculateNumber(1.2, 3.7), 5);
    });
    it("rounds given two numbers and returns there sum", () => {
        assert.equal(calculateNumber(1.5, 3.7), 6);
    });
});