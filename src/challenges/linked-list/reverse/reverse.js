const Stack = require('../../../data-structures/stack');
/**
 * Reverses the linked list and retunrs new head.
 * @param {LinkedListNode} head
 * @return {LinkedListNode}
 */
const reverse = (head) => {
  let prev = null;
  let current = head;
  while (current !== null) {
    const { next } = current;
    current.next = prev; // Referencing to prev node.
    prev = current; // Storing reference of previous node.
    current = next; // move to next node.
  }
  return prev;
};

/**
 * Another function which reverses the linked list and gives new head.
 * Inspired by RootTraveller http://disq.us/p/1nn3rpv
 */
const reverseRecursive = (node) => {
  if (node === null || node.next === null) {
    return node;
  }
  const head = reverseRecursive(node.next);
  node.next.next = node;
  node.next = null;
  return head;
};
module.exports = reverse;
