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
  const nodes = array.map((value) => new BinaryTreeNode(value));
  nodes.forEach((node, index) => {
    const doubleOfIndex = 2 * index;

    // Left node -> (2 * i) + 1.
    const lIndex = doubleOfIndex + 1;
    node.left = lIndex < nodes.length ? nodes[lIndex] : null;

    // Right node -> (2 * i) + 2.
    const rIndex = doubleOfIndex + 2;
    node.right = rIndex < nodes.length ? nodes[rIndex] : null;
  });
  return nodes[0];
};
module.exports = fromArrayRepresentation;
