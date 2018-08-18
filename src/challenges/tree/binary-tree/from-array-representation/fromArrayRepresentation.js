const BinaryTreeNode = require('../../../../data-structures/tree/binary-tree/BinaryTreeNode');
/**
 * Creates a binary tree from it's array representation.
 * https://www.geeksforgeeks.org/binary-tree-array-implementation/
 * @param {any} array
 */
const fromArrayRepresentation = (array) => {
  if (!array.length) {
    return null;
  }
  const nodes = array.map(
    (value) => (value !== null ? new BinaryTreeNode(value) : null)
  );

  nodes.forEach((node, index) => {
    if (node === null) {
      return;
    }

    const doubleOfIndex = 2 * index;

    // Left node -> (2 * i) + 1.
    const lIndex = doubleOfIndex + 1;
    if (lIndex < array.length) {
      node.setLeft(nodes[lIndex]);
    }

    // Right node -> (2 * i) + 2.
    const rIndex = doubleOfIndex + 2;
    if (rIndex < array.length) {
      node.setRight(nodes[rIndex]);
    }
  });

  return nodes[0];
};
module.exports = fromArrayRepresentation;
