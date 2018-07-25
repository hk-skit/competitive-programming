const Stack = require('../../../../data-structures/stack');
const traversePostOrder = (root) => {
  // TODO: Implement using single stack.
};

/**
 * Iteratively traverse a binary tree in post order. It uses two stacks.
 * https://www.geeksforgeeks.org/iterative-postorder-traversal/
 * @param {BinaryTreeNode} root
 */
const traversePostOrder2 = (root) => {
  const values = [];
  if (root === null) {
    return values;
  }
  const stack = new Stack();
  const auxStack = new Stack();
  stack.push(root);
  while (!stack.isEmpty()) {
    const node = stack.pop();
    auxStack.push(node);
    if (node.left !== null) {
      stack.push(node.left);
    }
    if (node.right !== null) {
      stack.push(node.right);
    }
  }
  while (!auxStack.isEmpty()) {
    values.push(auxStack.pop().value);
  }
  return values;
};

module.exports = traversePostOrder2;
