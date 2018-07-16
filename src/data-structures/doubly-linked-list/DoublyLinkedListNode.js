const LinkedListNode = require('../linked-list/LinkedListNode');

class DoublyLinkedListNode extends LinkedListNode {
  /**
   *
   * @param {*} value
   * @param {{next: DoublyLinkedListNode, prev: DoublyLinkedListNode}} param1
   */
  constructor(value, { next = null, prev = null } = {}) {
    super(value, next);
    this.prev = prev;
  }
}

module.exports = DoublyLinkedListNode;
