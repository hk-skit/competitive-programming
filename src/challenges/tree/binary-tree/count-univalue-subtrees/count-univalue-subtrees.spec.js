const should = require('should');
const { expect } = require('chai');
const sinon = require('sinon');
const countUnivalueSubtrees = require('./count-univalue-subtrees');
const fromArrayRepresentation = require('../from-array-representation/fromArrayRepresentation');

describe('countUnivalueSubtrees', () => {
  it('should return number of subtrees which have univalues', () => {
    const data = [
      { array: [], count: 0 },
      { array: [1], count: 1 },
      { array: [1, 1, 1], count: 3 },
      { array: [1, 0, 1, 1], count: 2 },
      { array: [1, null, 0], count: 1 },
      { array: [1, null, 1], count: 2 },
      { array: [1, 1, null], count: 2 }
    ].map(({ array, count }) => {
      const tree = fromArrayRepresentation(array);
      return { tree, count };
    });
    data.forEach(({ tree, count }) => {
      expect(countUnivalueSubtrees(tree)).to.equal(count);
    });
  });
});
