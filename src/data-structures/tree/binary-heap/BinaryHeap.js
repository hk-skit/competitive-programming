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
    return this.size ? this.get(0) : null;
  }

  get size() {
    return this.values.length;
  }

  /**
   * Returns items at @param index.
   *
   * @param {number} index
   * @memberof BinaryHeap
   */
  get(index) {
    return this.values[index];
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
    while (pIndex >= 0 && comparator(this.get(pIndex))) {
      this.swap(pIndex, index);
      index = pIndex;
      pIndex = this.getParentIndex(pIndex);
    }
  }

  /**
   *
   *
   * @param {*} comparator
   * @returns
   * @memberof BinaryHeap
   */
  heapify(comparator) {
    const _heapify = (index = 0) => {
      let lIndex = this.getLeftChildIndex(index);
      let rIndex = this.getRightChildIndex(index);
      let newIndex = index;
      if (lIndex < this.size && comparator(this.get(index), this.get(lIndex))) {
        newIndex = lIndex;
      } else if (
        rIndex < this.size &&
        comparator(this.get(index), this.get(rIndex))
      ) {
        newIndex = rIndex;
      }
      if (newIndex !== index) {
        this.swap(index, newIndex);
        this.heapify(newIndex);
      }
    };
    return _heapify;
  }

  adjustKey(index, value, comparator) {
    this.values[index] = value;
    let pIndex = this.getParentIndex(index);
    while (index > 0 && comparator(this.get(pIndex))) {
      this.swap(index, pIndex);
      index = pIndex;
      pIndex = this.getParentIndex(pIndex);
    }
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
   * Returns position of left child of node at @param index.
   *
   * @param {*} index
   * @returns
   * @memberof BinaryHeap
   */
  getLeftChildIndex(index) {
    return 2 * index + 1;
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
}

module.exports = BinaryHeap;
