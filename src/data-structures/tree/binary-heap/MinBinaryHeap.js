const BinaryHeap = require('./BinaryHeap');

class MinBinaryHeap extends BinaryHeap {
  constructor() {
    super();
  }

  get min() {
    return this.peek;
  }

  extractMin() {}

  insert(value) {
    super.insert(value, (parentValue) => value < parentValue);
  }

  remove() {}
}

module.exports = MinBinaryHeap;
