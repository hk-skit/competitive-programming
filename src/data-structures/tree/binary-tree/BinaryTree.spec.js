const should = require('should');
const { expect } = require('chai');
const sinon = require('sinon');
const BinaryTree = require('./BinaryTree');
const BinaryTreeNode = require('./BinaryTreeNode');

describe('BinaryTree', () => {
  it('should create an empty tree', function() {
    const tree = new BinaryTree();
    expect(tree.root).to.equal(null);
  });

  describe('BinaryTree.insertInLevelOrder', () => {
    it('should insert node in empty tree', () => {
      const tree = new BinaryTree();
      tree.insertInLevelOrder(10);
      expect(tree.root.value).to.equal(10);
      expect(tree.root.left).to.equal(null);
      expect(tree.root.right).to.equal(null);
    });

    it('should insert node in left then in right when tree is empty', () => {
      const tree = new BinaryTree();
      tree.insertInLevelOrder(10);
      tree.insertInLevelOrder(20);
      tree.insertInLevelOrder(30);
      /**
       *     10
       *    /   \
       *  20     30
       */
      expect(tree.root.value).to.equal(10);
      expect(tree.root.left.value).to.equal(20);
      expect(tree.root.right.value).to.equal(30);
      expect(tree.traverseInOrder()).to.deep.equal([20, 10, 30]);
    });

    it('should insert node in first position available in level order for existing tree', () => {
      const tree = new BinaryTree();
      /**
       * Before insertion.
       *            10
       *           /   \
       *         11     9
       *        /      /  \
       *      7       15    8
       */
      tree.root = new BinaryTreeNode(10);
      tree.root.setLeft(new BinaryTreeNode(11));
      tree.root.left.setLeft(new BinaryTreeNode(7));
      tree.root.setRight(new BinaryTreeNode(9));
      tree.root.right.setLeft(new BinaryTreeNode(15));
      tree.root.right.setRight(new BinaryTreeNode(8));
      // Before insertion.
      expect(tree.traverseInOrder()).to.deep.equal([7, 11, 10, 15, 9, 8]);
      tree.insertInLevelOrder(12);
      /**
       *  After insertion
       *             10
       *           /    \
       *         11      9
       *        /  \    /  \
       *      7    12  15    8
       */
      expect(tree.traverseInOrder()).to.deep.equal([7, 11, 12, 10, 15, 9, 8]);
    });
  });
});
