const BinaryTreeNode = require('./BinaryTreeNode');
const Queue = require('../../queue/Queue');
class BinaryTree {
  constructor() {
    this.root = null;
  }

  /**
   * Tells whether both nodes are mirror of each other or not.
   *
   * @static
   * @param {BinaryTreeNode} rootA
   * @param {BinaryTreeNode} rootB
   * @returns true if both tree are mirror of each other.
   * @memberof BinaryTree
   */
  static isMirror(rootA, rootB) {
    if (rootA === null && rootB === null) {
      return true;
    }
    if (rootA === null || rootB === null) {
      // one of the root is null
      return false;
    }
    if (rootA.value !== rootB.value) {
      return false;
    }
    return (
      BinaryTree.isMirror(rootA.left, rootB.right) &&
      BinaryTree.isMirror(rootA.right, rootB.left)
    );
  }

  /**
   *
   * @param {*} root
   */
  static isSymmetric(root) {
    if (root === null || root.isLeaf()) {
      return true;
    }
    return BinaryTree.isMirror(root, root);
  }

  /**
   * Create a new binary tree which is invert of tree whose root is passes as parameter.
   */
  static invert(root) {
    if (root === null) {
      return null;
    }
    const left = BinaryTree.invert(root.right);
    const right = BinaryTree.invert(root.left);
    const newRoot = new BinaryTreeNode(root.value);
    newRoot.setLeft(left);
    newRoot.setRight(right);
    return newRoot;
  }

  contains(value) {
    return this.root ? this.root.contains(value) : false;
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
   * Height of the tree.
   */
  height() {
    return this.root !== null ? this.root.height : 0;
  }

  /**
   * Traverse a tree in Level order that is BFS.
   * @return {Array}
   */
  traverseInLevelOrder() {
    if (this.root === null) {
      return [];
    }
    return this.root.traverseLevelOrder();
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
