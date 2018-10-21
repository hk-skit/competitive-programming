/**
 * Removes duplicates from a linked list.
 * @param {*} head
 */
const removeDuplicates = (head) => {
  const map = new Map();
  let current = head;
  let prev = null;
  while (current !== null) {
    const { value } = current;
    if (map.get(value)) {
      // Remove node.
      prev.next = current.next;
    } else {
      map.set(current.value, true);
    }
    prev = current;
    current = current.next;
  }
  return head;
};
