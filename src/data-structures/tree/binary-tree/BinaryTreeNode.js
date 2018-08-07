const Queue = require('../../queue/Queue');
class BinaryTreeNode {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }

  /**
   * Height of a node is considered as maximum depth. Maximum number of nodes from root to leaf node.
   * Height of root node is considered as 1.
   * Note: In some books, height is defined as longest path i.e. number of edges. In that case height
   * of root will be zero. Below code does not consider edges.
   */
  get height() {
    const lHeight = this.left !== null ? this.left.height : 0;
    const rHeight = this.right !== null ? this.right.height : 0;
    return Math.max(lHeight, rHeight) + 1; // +1 for height of current node.
  }

  /**
   *
   * @param {BinaryTreeNode} node
   */
  setLeft(node) {
    // TODO: Add parents logic when we add parent reference.
    this.left = node;
    return this;
  }

  /**
   *
   * @param {BinaryTreeNode} node
   */
  setRight(node) {
    // TODO: Add parents logic when we add parent reference.
    this.right = node;
    return this;
  }

  /**
   * Traverse a tree in Level order that is BFS.
   * @return {Array}
   */
  traverseLevelOrder() {
    const array = [];
    const queue = new Queue();
    queue.enqueue(this);
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
   *
   *
   * @returns {Array}
   */
  traverseInOrder() {
    const values = [];
    if (this.left) {
      values.push(...this.left.traverseInOrder());
    }
    values.push(this.value);
    if (this.right) {
      values.push(...this.right.traverseInOrder());
    }
    return values;
  }

  /**
   *
   *
   * @returns {Array}
   */
  traversePreOrder() {
    const values = [];
    values.push(this.value);
    if (this.left) {
      values.push(...this.left.traversePreOrder());
    }
    if (this.right) {
      values.push(...this.right.traversePreOrder());
    }
    return values;
  }

  /**
   *
   *
   * @returns {Array}
   */
  traversePostOrder() {
    const values = [];
    if (this.left) {
      values.push(...this.left.traversePostOrder());
    }
    if (this.right) {
      values.push(...this.right.traversePostOrder());
    }
    values.push(this.value);
    return values;
  }
}

module.exports = BinaryTreeNode;
