const should = require('should');
const { expect } = require('chai');
const sinon = require('sinon');
const fromArrayRepresentation = require('../fromArrayRepresentation/fromArrayRepresentation');
const minimum = require('./minimum');

describe('BinaryTree.minimum', () => {
  it('should return minimum value when tree is empty', () => {
    expect(minimum()).to.equal(Number.MAX_SAFE_INTEGER);
  });

  it('should return minimum value when there only one element', () => {
    const root = fromArrayRepresentation([1]);
    expect(minimum(root)).to.equal(1);
  });

  it('should return minimum value when there are multiple element', () => {
    const arrays = [
      [3, 2, 1, 4, 5, 6],
      [1, 2, 3],
      [2, 3],
      [0, 1, 2],
      [-2, -12, 4],
      [3, -4, 5, 6, 7, 8, -10]
    ];
    arrays.forEach((array) => {
      const root = fromArrayRepresentation(array);
      expect(minimum(root)).to.equal(Math.min(...array));
    });
  });
});
