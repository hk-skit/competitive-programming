const should = require('should');
const { expect } = require('chai');
const sinon = require('sinon');
const { Random } = require('../../../utils');
const kLargestElements = require('./k-largest-elements');
describe('largestElements', () => {
  it('should return largest elements', () => {
    const arrays = [
      [],
      Random.createArray(),
      Random.createArray({ size: Random.number() }),
      Random.createArray({ size: Random.number() }),
      Random.createArray({ size: Random.number(2, 100) })
    ].map((array) => {
      const k = Random.number(array.length);
      const output = [...array].sort((b, a) => b - a).slice(-k);
      return { input: { array, k }, output };
    });
    arrays.forEach(({ input, output }) => {
      expect(kLargestElements(input.array, input.k)).to.deep.equal(output);
    });
  });
});
