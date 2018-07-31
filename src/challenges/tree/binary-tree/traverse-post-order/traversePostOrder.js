const Stack = require('../../../../data-structures/stack');
/**
 * Iteratively traverses a binary tree in pre order using a single
 * stack. https://articles.leetcode.com/binary-tree-post-order-traversal/
 * @param {*} root
 */
const traversePostOrder = (root) => {
  const values = [];
  if (root === null) {
    return values;
  }

  const stack = new Stack();

  // Previous node to keep track of previously traversed node. It
  // will help us to detect whether we are moving up or down in a tree.
  let prev = null;

  stack.push(root);

  while (!stack.isEmpty()) {
    const current = stack.peek();
    if (prev === null || prev.left === current || prev.right === current) {
      // previous is parent of current node, it means we are traverse downwards
      // in a tree.
      if (current.left !== null) {
        stack.push(current.left);
      } else if (current.right !== null) {
        stack.push(current.right);
      }
    } else if (current.left === prev) {
      // we are moving up from left.
      if (current.right !== null) {
        stack.push(current.right);
      }
    } else {
      values.push(current.value);
      stack.pop();
    }

    prev = current;
  }

  return values;
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

module.exports = traversePostOrder;
