const DoublyLinkedListNode = require('./DoublyLinkedListNode');
const LinkedList = require('../linked-list/LinkedList');
class DoublyLinkedList extends LinkedList {
  constructor() {
    super();
  }

  /**
   *
   * @param {*} value
   */
  append(value) {
    const node = new DoublyLinkedListNode(value, { prev: this.tail });
    if (this.tail === null) {
      this.head = node;
      this.tail = node;
      return this;
    }
    this.tail.next = node;
    this.tail = node;
    return this;
  }

  /**
   *
   * @param {*} value
   */
  prepend(value) {
    const node = new DoublyLinkedListNode(value, { next: this.head });
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return this;
    }
    this.head.prev = node;
    this.head = node;
    return this;
  }

  /**
   *@return {DoublyLinkedListNode}
   */
  remove(value) {
    const node = super.remove(value);
    if (node !== null) {
      node.prev = null;
    }
    return node;
  }

  /**
   *@return {DoublyLinkedListNode}
   */
  removeHead() {
    const node = super.removeHead();
    return node;
  }

  /**
   *@return {DoublyLinkedListNode}
   */
  removeTail() {
    const node = super.removeTail();
    if (node !== null) {
      node.prev = null;
    }
    return node;
  }
}

module.exports = DoublyLinkedList;
