const BinaryTreeNode = require('./BinaryTreeNode');
const Queue = require('../../queue/Queue');
class BinaryTree {
  constructor() {
    this.root = null;
  }

  /**
   * Size of a tree is the number of elements present in the tree.
   *@return {number} number of nodes in tree.
   */
  size(node = this.root) {
    if (node === null) {
      return 0;
    }
    return this.size(node.left) + 1 + this.size(node.right);
  }

  /**
   * Traverse a tree in Level order that is BFS.
   * @return {Array}
   */
  traverseInLevelOrder() {
    if (this.root === null) {
      return [];
    }
    const array = [];
    const queue = new Queue();
    queue.enqueue(this.root);
    while (!queue.isEmpty()) {
      const node = queue.dequeue();
      array.push(node.value);
      if (node.left !== null) {
        queue.enqueue(node.left);
      }
      if (node.right !== null) {
        queue.enqueue(node.right);
      }
    }
    return array;
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
    const queue = new Queue();
    queue.enqueue(this.root);
    while (!queue.isEmpty()) {
      const _node = queue.dequeue();
      if (_node.left === null) {
        _node.setLeft(node);
        break;
      }
      queue.enqueue(_node.left);
      if (_node.right === null) {
        _node.setRight(node);
        break;
      }
      queue.enqueue(_node.right);
    }
    return this;
  }

  /**
   *
   *
   * @returns {Array}
   */
  traverseInOrder() {
    return this.root ? this.root.traverseInOrder() : [];
  }

  /**
   *
   *
   * @returns {Array}
   */
  traversePreOrder() {
    return this.root ? this.root.traversePreOrder() : [];
  }

  /**
   *
   *
   * @returns {Array}
   */
  traversePostOrder() {
    return this.root ? this.root.traversePostOrder() : [];
  }
}

module.exports = BinaryTree;
