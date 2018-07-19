class BinaryTreeNode {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
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
