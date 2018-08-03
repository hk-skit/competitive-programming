const Queue = require('../../../../data-structures/queue/Queue');
const BinaryTree = require('../../../../data-structures/tree/binary-tree');

/**
 * Returns true if the tree has a root-to-leaf path such that adding up all
 * the values along the path equals the given sum
 * @param {BinaryTreeNode} root
 * @param {number} sum
 */
const hasPathSumRecursive = (root, sum) => {
  if (root === null) {
    return false;
  }
  if (BinaryTree.isLeaf(root) && root.value === sum) {
    return true;
  }
  return (
    hasPathSumRecursive(root.left, sum - root.value) ||
    hasPathSumRecursive(root.right, sum - root.value)
  );
};

/**
 * Returns true if the tree has a root-to-leaf path such that adding up all
 * the values along the path equals the given sum.
 * @param {BinaryTreeNode} root
 * @param {number} sum
 */
const hasPathSum = (root, sum) => {
  if (root === null) {
    return false;
  }
  // Store the path sum for each node.
  const sums = new Queue();
  // Stored nodes for BFS traversal.
  const queue = new Queue();
  queue.enqueue(root);
  sums.enqueue(root.value);
  while (!queue.isEmpty()) {
    const current = queue.dequeue();
    const sumValue = sums.dequeue();
    if (BinaryTree.isLeaf(current) && current.value === sumValue) {
      return true;
    }
    if (current.left) {
      queue.enqueue(current.left);
      sums.enqueue(current.left.value + sumValue);
    }
    if (current.right) {
      queue.enqueue(current.right);
      sums.enqueue(current.right.value + sumValue);
    }
  }
  return false;
};

module.exports = hasPathSum;
