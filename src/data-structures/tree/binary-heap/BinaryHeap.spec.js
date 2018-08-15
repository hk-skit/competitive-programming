const should = require('should');
const { expect } = require('chai');
const sinon = require('sinon');
const BinaryHeap = require('./BinaryHeap');

describe('BinaryHeap', () => {
  it('should not create instance of BinaryHeap', () => {
    expect(() => new BinaryHeap()).to.throw(
      Error,
      "Can't instantiate abstract class."
    );
  });
});
