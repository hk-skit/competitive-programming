const LinkedList = require("./LinkedListNode");

class LinkedList {
  constructor() {
    this.head = null;
  }

  /**
   * Adds a value to the beginning/head of the list.
   * @param {*} value
   */
  prepend(value) {}

  /**
   * Adds a value to the end/tail of the list.
   * @param {*} value
   */
  append(value) {}

  /**
   * Remove the item from linked list.
   * @param {*} value
   */
  remove(value) {}

  removeHead() {}

  removeTail() {}

  find(value) {
    let current = this.head;
    while (current !== null) {
      if (current.data === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  toArray() {}

  toString() {}
}

module.exports = LinkedList;
