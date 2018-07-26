const Stack = require('../../../../data-structures/stack/Stack');

/**
 * Iteratively traverses a binary tree in pre order.
 * @param {BinaryTreeNode} root
 */
const traversePreOrder = (root) => {
  const values = [];
  if (root === null) {
    return values;
  }
  const stack = new Stack();
  stack.push(root);
  while (!stack.isEmpty()) {
    let { value, left, right } = stack.pop();
    values.push(value);
    if (right) {
      stack.push(right);
    }
    if (left) {
      stack.push(left);
    }
  }
  return values;
};

module.exports = traversePreOrder;
