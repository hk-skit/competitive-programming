const should = require('should');
const { expect } = require('chai');
const sinon = require('sinon');
const fromArrayRepresentation = require('./fromArrayRepresentation');
describe('BinaryTree.fromArrayRepresentation', () => {
  it('should return null cause array is empty', () => {
    const array = [];
    const tree = fromArrayRepresentation(array);
    expect(tree).to.equal(null);
  });

  it('should create tree with only root node', () => {
    const array = [10];
    const tree = fromArrayRepresentation(array);
    expect(tree).to.deep.equal({ value: 10, left: null, right: null });
  });

  it('should create tree with left and child node', () => {
    const array = [10, 20, 30];
    const tree = fromArrayRepresentation(array);
    const expectedTree = {
      value: 10,
      left: { value: 20, left: null, right: null },
      right: { value: 30, left: null, right: null }
    };
    expect(tree).to.deep.equal(expectedTree);
  });

  it('should create tree from array', () => {
    const array = [10, 20, 30, 40, 50, 60];
    const tree = fromArrayRepresentation(array);
    const expectedTree = {
      value: 10,
      left: {
        value: 20,
        left: { value: 40, left: null, right: null },
        right: { value: 50, left: null, right: null }
      },
      right: {
        value: 30,
        left: { value: 60, left: null, right: null },
        right: null
      }
    };
    expect(tree).to.deep.equal(expectedTree);
  });
});
