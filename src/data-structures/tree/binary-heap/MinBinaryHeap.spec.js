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
    it('should insert values to heap', () => {
      const heap = new MinBinaryHeap();
      const values = [20, 10, 30, 5];
      values.forEach((value) => heap.insert(value));
      /**
       * Expected Heap = [5, 10, 30, 20]
       */
      expect(heap.min).to.equal(Math.min(...values));
      expect(heap.values).to.deep.equal([5, 10, 30, 20]);
    });
  });

  describe('MinBinaryHeap.extractMin', () => {
    it('should return null cause heap is empty', () => {
      const heap = new MinBinaryHeap();
      expect(heap.extractMin()).to.equal(null);
    });

    it('should extract min', () => {
      const heap = new MinBinaryHeap();
      const values = (() => {
        const array = [];
        while (array.length < 10) {
          array.push(Date.now() + array.length);
        }
        return array;
      })();
      values.forEach((value) => heap.insert(value));
      const min = heap.min;
      expect(heap.extractMin()).to.equal(min);
      expect(heap.min).to.not.equal(min);
    });
  });

  describe('MinBinaryHeap.removeAt', () => {
    it('should throw exception cause index is out of bound', () => {
      const heap = new MinBinaryHeap();
      expect(() => heap.removeAt(1)).to.throw(Error, 'Index out of bound.');
    });

    it('should remove item from index', () => {
      const heap = new MinBinaryHeap();
      const values = [20, 10, 30, 5];
      values.forEach((value) => heap.insert(value));
      // Resultant Heap = [5, 10, 30, 20]
      expect(heap.removeAt(1)).to.equal(10);
      expect(heap.values).to.deep.equal([5, 20, 30]);
    });
  });
});
