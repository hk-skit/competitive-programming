const should = require('should');
const { expect } = require('chai');
const sinon = require('sinon');
const { Random } = require('../../utils');
const heapSort = require('./heap-sort');
describe('heapSort', () => {
  it('should sort arrays', () => {
    const arrays = [
      Random.createArray(),
      Random.createArray({ size: 10 }),
      Random.createArray({ size: 20 }),
      Random.createArray({ size: 5 })
    ].map((input) => {
      const output = [...input].sort((b, a) => b - a);
      return { input, output };
    });
    arrays.forEach(({ input, output }) => {
      heapSort(input);
      expect(input).to.deep.equal(output);
    });
  });
});
