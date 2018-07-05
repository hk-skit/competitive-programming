const LinkedListNode = require("./LinkedListNode");

class LinkedList {
  constructor() {
    this.head = null;
  }

  /**
   * Adds a value to the beginning/head of the list.
   * @param {*} value
   */
  prepend(value) {
    this.head = new LinkedListNode(value, this.head);
    return this;
  }

  /**
   * Adds a value to the end/tail of the list.
   * @param {*} value
   */
  append(value) {
    const node = new LinkedListNode(value);
    if (!this.head) {
      this.head = node;
      return this;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
    return this;
  }

  /**
   * Remove the item from linked list.
   * @param {*} value
   */
  remove(value) {
    let current = this.head;
    let prev = null;
    while (current !== null) {
      if (current.value === value) {
        break;
      }
      prev = current;
      current = current.next;
    }
    //  if value not found.
    if (current === null) {
      return null;
    }
    // if value is head.
    if (prev === null) {
      return this.removeHead();
    }
    prev.next = current.next; // Moving pointer to next node.
    current.next = null; // Delete pointer from current.
    return current;
  }

  /**
   * Move head to the next element to the head.
   */
  removeHead() {
    if (!this.head) {
      return null;
    }
    const head = this.head; // head node
    this.head = this.head.next; // shift head to next node
    head.next = null; // remove pointer to next
    return head;
  }

  /**
   * Move tail to the prev element to the tail.
   */
  removeTail() {
    let current = this.head;
    let prev = null;
    while (current.next !== null) {
      prev = current;
      current = current.next;
    }
    // if both head and tail are same.
    if (prev === null) {
      return this.removeHead();
    }
    prev.next = null; // remove pointer to tail.
    return current;
  }

  /**
   *
   * @param {*} value
   */
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

  /**
   * @return {LinkedListNode[]}
   */
  toArray() {
    const array = [];
    let current = this.head;
    while (current !== null) {
      array.push(current);
      current = current.next;
    }
    return array;
  }

  toString(callback) {
    return this.toArray()
      .map(node => node.toString(callback))
      .toString();
  }
}

module.exports = LinkedList;
