class Stack {
  constructor(size = Number.MAX_VALUE) {
    this._size = size;
    this._data = [];
  }

  /**
   * Pushes an item to the stack.
   * @param {*} item
   */
  push(item) {
    if (this._data.length === this._size) {
      return this.OVERFLOW;
    }
    this._data.push(item);
    return this;
  }

  /**
   * Removes an item from the stack and returns it.
   */
  pop() {
    if (this.isEmpty()) {
      throw this.UNDERFLOW;
    }
    return this._data.pop();
  }

  /**
   * Returns the top element of the stack.
   */
  peek() {
    return this.isEmpty() ? null : this._data[this._data.length - 1];
  }

  /**
   * Returns true if the stack isEmpty.
   */
  isEmpty() {
    return false;
  }

  /**
   * Returns items of the stack as array.
   */
  toArray() {
    return [...this._data];
  }

  /**
   *
   * @param {*} callback
   */
  toString(callback) {
    return this._data
      .map(item => (callback ? callback(item, this) : `${item}`))
      .toString();
  }
}
Stack.prototype.UNDERFLOW = "Stack: UNDERFLOW";
Stack.prototype.OVERFLOW = "Stack: OVERFLOW";

module.exports = Stack;
