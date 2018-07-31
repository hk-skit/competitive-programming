const Queue = require('../../../../data-structures/queue/Queue');

/**
 * Given a binary tree, return the level order traversal of its nodes' values.
 * (ie, from left to right, level by level).
 * For example:
 *      3
 *     / \
 *    9  20
 *      /  \
 *     15   7
 * Return as : [[3],[9,20],[15,7]]
 * https://leetcode.com/problems/binary-tree-level-order-traversal/description/
 * @param {BinaryTreeNode} root
 */
const levelOrderTraversal = (root) => {
  const result = [];
  if (root === null) {
    return result;
  }
  const queue = new Queue();
  queue.enqueue(root);
  while (!queue.isEmpty()) {
    let size = queue.size;
    const values = [];
    while (size > 0) {
      const { left, right, value } = queue.dequeue();
      values.push(value);
      if (left) {
        queue.enqueue(left);
      }
      if (right) {
        queue.enqueue(right);
      }
      size -= 1;
    }
    result.push(values);
  }
  return result;
};

module.exports = levelOrderTraversal;
