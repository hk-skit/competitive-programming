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
    it('should insert values to heap', () => {
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

  describe('MaxBinaryHeap.extractMax', () => {
    it('should return null cause heap is empty', () => {
      const heap = new MaxBinaryHeap();
      expect(heap.extractMax()).to.equal(null);
    });

    it('should extract max', () => {
      const heap = new MaxBinaryHeap();
      const values = (() => {
        const array = [];
        while (array.length < 10) {
          array.push(Date.now() + array.length);
        }
        return array;
      })();
      values.forEach((value) => heap.insert(value));
      const max = heap.max;
      expect(heap.extractMax()).to.equal(max);
      expect(heap.max).to.not.equal(max);
    });
  });

  describe('MaxBinaryHeap.removeAt', () => {
    it('should throw exception cause index is out of bound', () => {
      const heap = new MaxBinaryHeap();
      expect(() => heap.removeAt(1)).to.throw(Error, 'Index out of bound.');
    });

    it('should remove item from index', () => {
      const heap = new MaxBinaryHeap();
      const values = [20, 10, 30, 5, 3];
      values.forEach((value) => heap.insert(value));
      // Resultant Heap = [30, 10, 20, 5, 3]
      expect(heap.removeAt(1)).to.equal(10);
      expect(heap.values).to.deep.equal([30, 3, 20, 5]);
      expect(heap.removeAt(2)).to.equal(20);
      expect(heap.values).to.deep.equal([30, 3, 5]);
    });
  });
});
