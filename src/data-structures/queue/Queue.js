const LinkedList = require('../linked-list');
class Queue {
  constructor() {
    this._list = new LinkedList();
  }

  get size() {
    return this._list.length;
  }

  front() {
    return this._list.head && this._list.head.value;
  }

  rear() {
    return this._list.tail && this._list.tail.value;
  }

  isEmpty() {
    return this.size === 0;
  }

  enqueue(value) {
    this._list.append(value);
    return this;
  }

  dequeue() {
    const head = this._list.removeHead();
    return head && head.value;
  }

  toArray() {
    return this._list.toArray().map((node) => node.value);
  }

  toString(callback) {
    return this._list.toString(callback);
  }
}

module.exports = Queue;
