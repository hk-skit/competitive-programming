class BinaryHeap {
  constructor() {
    if (this.constructor === BinaryHeap) {
      throw new Error("Can't instantiate abstract class.");
    }
    this.values = [];
  }

  /**
   * Returns element on the top of the heap i.e. root element.
   *
   * @readonly
   * @memberof BinaryHeap
   */
  get peek() {
    return this.size ? this.values[0] : null;
  }

  get size() {
    return this.values.length;
  }

  /**
   * Swaps values which are at @param posA and @param posB.
   *
   * @param {*} posA
   * @param {*} posB
   * @memberof BinaryHeap
   */
  swap(posA, posB) {
    //swapping using es6
    [this.values[posA], this.values[posB]] = [
      this.values[posB],
      this.values[posA]
    ];
  }

  insert(value, comparator) {
    this.values.push(value);
    let index = this.size - 1;
    let pIndex = this.getParentIndex(index);
    while (pIndex >= 0 && comparator(this.values[pIndex])) {
      this.swap(pIndex, index);
      index = pIndex;
      pIndex = this.getParentIndex(pIndex);
    }
  }

  /**
   * Returns parent of the node at @param index.
   *
   * @param {*} index
   * @returns
   * @memberof BinaryHeap
   */
  getParent(index) {
    index = this.getParentIndex(index);
    return index >= 0 ? this.values[index] : null;
  }

  /**
   * Returns left child of node at @param index.
   *
   * @param {*} index
   * @returns
   * @memberof BinaryHeap
   */
  getLeftChild(index) {
    index = this.getLeftChildIndex(index);
    return this.size <= index ? null : this.values[index];
  }

  /**
   * Returns right child of the node at @param index.
   *
   * @param {*} index
   * @returns
   * @memberof BinaryHeap
   */
  getRightChild(index) {
    index = this.getRightChildIndex(index);
    return this.size <= index ? null : this.values[index];
  }

  /**
   * Returns position of parent node of node at @param index.
   *
   * @param {*} index
   * @returns
   * @memberof BinaryHeap
   */
  getParentIndex(index) {
    index = index - 1;
    return index < 0 ? index : Math.floor(index / 2);
  }

  /**
   * Returns position of right child of node at @param index.
   *
   * @param {*} index
   * @returns
   * @memberof BinaryHeap
   */
  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  /**
   * Returns position of left child of node at @param index.
   *
   * @param {*} index
   * @returns
   * @memberof BinaryHeap
   */
  getLeftChildIndex(index) {
    return 2 * index + 1;
  }
}

module.exports = BinaryHeap;
