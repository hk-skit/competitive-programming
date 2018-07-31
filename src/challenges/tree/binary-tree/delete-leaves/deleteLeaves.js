const BinaryTree = require('../../../../data-structures/tree/binary-tree/BinaryTree');

/**
 * Deletes leaf node with value {@param x}. Also, deletes new formed tree leaves
 * with value `x`.
 * @param {BinaryTreeNode} root
 * @param {any} x
 */
const deleteLeaves = (root, x) => {
  if (root === null) {
    return null;
  }

  root.left = deleteLeaves(root.left, x);
  root.right = deleteLeaves(root.right, x);

  if (root.value === x && BinaryTree.isLeafNode(root)) {
    return null;
  }
  return root;
};
module.exports = deleteLeaves;
