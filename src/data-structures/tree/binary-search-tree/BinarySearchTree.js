const BinaryTree = require('../binary-tree/BinaryTree');

export class BinarySearchTree extends BinaryTree {
  constructor() {
    super();

    // Insert in level order function doesn't make sense in binary search tree.
    // Since the way elements are inserted/remove from binary search tree
    // different from binary tree.
    this.insertInLevelOrder = undefined;
  }

  /**
   * Removes the value from a binary search tree.
   *
   * @param {*} value
   * @memberof BinarySearchTree
   */
  remove(value) {
    const removeNode = (node, _value) => {
      if (node === null) {
        return null;
      }

      if (_value < node.value) {
        node.left = removeNode(node.left, _value);
      } else if (_value > node.value) {
        node.right = removeNode(node.right, _value);
      } else {
        // node with no children i.e. leaf node.
        if (node.isLeaf()) {
          return null;
        }

        // node has only right child.
        if (node.left === null) {
          return node.right;
        }

        // node has only left child.
        if (node.right === null) {
          return node.left;
        }

        // node has both left and right child. We need to do replacement with
        // minimum value.
        node.value = node.min();
        // removing node with minimum value.
        node.right = removeNode(node.right, node.value);
      }
      return node;
    };
    this.root = removeNode(this.root, value);
  }
}
