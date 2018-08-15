const BinaryHeap = require('./BinaryHeap');

class MinBinaryHeap extends BinaryHeap {
  constructor() {
    super();

    this.minHeapify = this.heapify((parentValue, childValue) => {
      return childValue < parentValue;
    });
  }

  /**
   *
   *
   * @readonly
   * @memberof MinBinaryHeap
   */
  get min() {
    return this.peek;
  }

  /**
   *
   *
   * @param {*} index
   * @param {*} value
   * @memberof MinBinaryHeap
   */
  decreaseKey(index, value) {
    this.adjustKey(index, value, (parentValue) => parentValue > value);
  }

  /**
   *
   *
   * @returns
   * @memberof MinBinaryHeap
   */
  extractMin() {
    if (this.min === null) {
      return null;
    }
    this.swap(0, this.size - 1);
    const min = this.values.pop();
    this.minHeapify();
    return min;
  }

  /**
   *
   *
   * @param {*} value
   * @memberof MinBinaryHeap
   */
  insert(value) {
    super.insert(value, (parentValue) => value < parentValue);
  }

  /**
   *
   *
   * @param {*} index
   * @memberof MinBinaryHeap
   */
  removeAt(index) {
    if (index >= this.size) {
      throw new Error('Index out of bound.');
    }
    const value = this.values[index];
    this.decreaseKey(index, Number.MIN_SAFE_INTEGER);
    this.extractMin();
    return value;
  }
}

module.exports = MinBinaryHeap;
