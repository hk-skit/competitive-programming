const BinaryTreeNode = require('./BinaryTreeNode');
class BinaryTree {
  constructor() {
    this.root = null;
  }

  /**
   * Insert the value into the binary tree at first position available in level order.
   * https://www.geeksforgeeks.org/insertion-binary-tree/
   */
  insertInLevelOrder(value) {
    const node = new BinaryTreeNode(value);
    if (this.root === null) {
      this.root = node;
      return this;
    }
    // TODO: Use Queue class here when it's available.
    const queue = [this.root];
    while (queue.length) {
      const _node = queue.shift();
      if (_node.left === null) {
        _node.setLeft(node);
        break;
      }
      queue.push(_node.left);
      if (_node.right === null) {
        _node.setRight(node);
        break;
      }
      queue.push(_node.right);
    }
    return this;
  }

  traverseInOrder() {
    return this.root.traverseInOrder();
  }

  /**
   * Creates a binary tree from it's array representation.
   * https://www.geeksforgeeks.org/binary-tree-array-implementation/
   * @param {any} array
   */
  static fromArrayRepresentation(array) {
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
  }
}

module.exports = BinaryTree;
