const BinaryTreeNode = require('./BinaryTreeNode');
const Queue = require('../../queue/Queue');
class BinaryTree {
  constructor() {
    this.root = null;
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
