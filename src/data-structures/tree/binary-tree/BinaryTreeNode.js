class BinaryTreeNode {
  constructor(value = null) {
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
   * Traverse tree in order and return elements as an array.
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
}

module.exports = BinaryTreeNode;
