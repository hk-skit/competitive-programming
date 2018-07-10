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
}

module.exports = BinaryTree;
