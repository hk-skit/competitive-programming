/**
 * Returns kth element from the last.
 * @param {*} head
 * @param {*} k
 */
const kthToLast = (head, k) => {
  let index = 0;

  const helperFn = (node) => {
    if (node === null) {
      return null;
    }
    const n = helperFn(node.next);
    index += 1;
    if (index === k) {
      return node;
    }
    return n;
  };

  return helperFn(head, k);
};

// Iterative approach. It uses two pointers. It places the pointer k steps
// ahead, then starts moving both pointer till the first pointer reached to the
// end.
const kthToLastIterative = (head, k) => {
  let p1 = head;
  let p2 = head;
  for (let i = 0; i < k; i += 1) {
    if (p1 === null) {
      // out of bound error.
      return null;
    }
    p1 = p1.next;
  }
  while (p1 !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p2;
};
