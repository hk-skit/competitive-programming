const BinaryHeap = require('./BinaryHeap');
class MaxBinaryHeap extends BinaryHeap {
  constructor() {
    super();
  }

  get max() {
    return this.peek;
  }

  heapify(index = 0) {
    const lIndex = this.getLeftChildIndex(index);
    const rIndex = this.getRightChildIndex(index);
    let max = index;
    if (lIndex < this.size && this.values[index] < this.values[lIndex]) {
      max = lIndex;
    } else if (rIndex < this.size && this.values[index] < this.values[rIndex]) {
      max = rIndex;
    }

    if (max !== index) {
      this.swap(max, index);
      this.heapify(max);
    }
  }

  extractMax() {
    if (this.max === null) {
      return this.max;
    }
    // Moving last value to root.
    this.swap(0, this.values.length - 1);
    // Removing max.
    const max = this.values.pop();
    this.heapify();
    return max;
  }

  insert(value) {
    super.insert(value, (parentValue) => value > parentValue);
  }

  remove(value) {}
}

module.exports = MaxBinaryHeap;
