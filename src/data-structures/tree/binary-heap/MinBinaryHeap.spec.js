const should = require('should');
const { expect } = require('chai');
const sinon = require('sinon');
const MinBinaryHeap = require('./MinBinaryHeap');

describe('MinBinaryHeap', () => {
  it('should create an empty heap', () => {
    const heap = new MinBinaryHeap();
    expect(heap.peek).to.equal(null);
  });

  describe('MinBinaryHeap.insert', () => {
    const heap = new MinBinaryHeap();
    const values = [20, 10, 30, 5];
    values.forEach((value) => heap.insert(value));
    /**
     * Expected Heap = [5, 10, 30, 20]
     *
     */
    expect(heap.min).to.equal(Math.min(...values));
    expect(heap.values).to.deep.equal([5, 10, 30, 20]);
  });
});
