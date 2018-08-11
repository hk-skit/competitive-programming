const BinaryTreeNode = require('../binary-tree/BinaryTreeNode');

class BinaryTreeSearchNode extends BinaryTreeNode {
  constructor(value = null) {
    super(value);
  }

  /**
   * Minimum value in a binary search tree node.
   * @return {number}
   */
  min() {
    return this.left === null ? this.value : this.left.min();
  }

  /**
   * Maximum value in binary search tree node.
   * @return {number}
   */
  max() {
    return this.right === null ? this.value : this.right.max();
  }

  /**
   * Returns tree if node contains passed value.
   * @param {*} value
   * @return {boolean}
   */
  contains(value) {
    if (this.value === value) {
      return true;
    }
    const node = value < this.value ? this.left : this.right;
    return !!node && node.contains(value);
  }

  add(value) {
    if (value === this.value) {
      // we do not allow duplicates in our tree.
      return null;
    }

    if (this.value < value) {
      // Add to the right.
      if (this.right) {
        return this.right.add(value);
      }
      this.setRight(new BinaryTreeSearchNode(value));
      return;
    }

    if (this.value > value) {
      // Add to the left.
      if (this.left) {
        return this.left.add(value);
      }
      this.setLeft(new BinaryTreeSearchNode(value));
    }
  }
}

module.exports = BinaryTreeSearchNode;
