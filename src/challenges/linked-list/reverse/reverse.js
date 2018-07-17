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

module.exports = reverse;
