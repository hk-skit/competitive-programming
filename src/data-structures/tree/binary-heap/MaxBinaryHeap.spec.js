const should = require('should');
const { expect } = require('chai');
const sinon = require('sinon');
const MaxBinaryHeap = require('./MaxBinaryHeap');

describe('MaxBinaryHeap', () => {
  it('should create an empty heap', () => {
    const heap = new MaxBinaryHeap();
    expect(heap.peek).to.equal(null);
  });

  describe('MaxBinaryHeap.insert', () => {
    const heap = new MaxBinaryHeap();
    const values = [20, 10, 30, 5];
    values.forEach((value) => heap.insert(value));
    /**
     * Expected Heap = [30, 10, 20, 5]
     *
     */
    expect(heap.max).to.equal(Math.max(...values));
    expect(heap.values).to.deep.equal([30, 10, 20, 5]);
  });
});
