const should = require('should');
const { expect } = require('chai');
const sinon = require('sinon');
const fromArrayRepresentation = require('../from-array-representation/fromArrayRepresentation');
const maximum = require('./maximum');

describe('BinaryTree.maximum', () => {
  it('should return maximum value when tree is empty', () => {
    expect(maximum()).to.equal(Number.MIN_SAFE_INTEGER);
  });

  it('should return maximum value when there only one element', () => {
    const root = fromArrayRepresentation([1]);
    expect(maximum(root)).to.equal(1);
  });

  it('should return maximum value when there are multiple element', () => {
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
      expect(maximum(root)).to.equal(Math.max(...array));
    });
  });
});
