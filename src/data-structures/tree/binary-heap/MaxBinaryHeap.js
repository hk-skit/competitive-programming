const BinaryHeap = require('./BinaryHeap');
class MaxBinaryHeap extends BinaryHeap {
  constructor() {
    super();
    this.maxHeapify = this.heapify((parentValue, chidValue) => {
      return chidValue > parentValue;
    });
  }

  /**
   *
   *
   * @readonly
   * @memberof MaxBinaryHeap
   */
  get max() {
    return this.peek;
  }

  /**
   *
   *
   * @param {*} index
   * @param {*} value
   * @memberof MaxBinaryHeap
   */
  increaseKey(index, value) {
    this.adjustKey(index, value, (parentValue) => parentValue < value);
  }

  /**
   *
   *
   * @returns
   * @memberof MaxBinaryHeap
   */
  extractMax() {
    if (this.max === null) {
      return this.max;
    }
    // Moving last value to root.
    this.swap(0, this.size - 1);
    // Removing max.
    const max = this.values.pop();
    this.maxHeapify();
    return max;
  }

  /**
   *
   *
   * @param {*} value
   * @memberof MaxBinaryHeap
   */
  insert(value) {
    super.insert(value, (parentValue) => value > parentValue);
  }

  /**
   *
   *
   * @param {*} index
   * @returns
   * @memberof MaxBinaryHeap
   */
  removeAt(index) {
    if (index >= this.size) {
      throw new Error('Index out of bound.');
    }
    const value = this.get(index);
    this.increaseKey(index, Number.MAX_SAFE_INTEGER);
    this.extractMax();
    return value;
  }
}

module.exports = MaxBinaryHeap;
