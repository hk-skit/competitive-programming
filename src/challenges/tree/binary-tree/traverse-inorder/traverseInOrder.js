const Stack = require('../../../../data-structures/stack');

/**
 * Iteratively traverses a binary tree in order.
 * @param {BinaryTreeNode} root
 */
const traverseInOrder = (root) => {
  const values = [];
  if (root === null) {
    return values;
  }
  const stack = new Stack();
  let current = root;
  while (current !== null || !stack.isEmpty()) {
    // push all left nodes to stack.
    while (current !== null) {
      // Push pointer to current node before moving to left node.
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    values.push(current.value);
    current = current.right;
  }
  return values;
};

module.exports = traverseInOrder;
