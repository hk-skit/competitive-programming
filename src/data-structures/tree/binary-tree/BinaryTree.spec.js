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

  describe('BinaryTree.size', () => {
    it('should return zero cause tree is empty', () => {
      const tree = new BinaryTree();
      expect(tree.size()).to.equal(0);
    });

    it('should return the size of the tree', () => {
      const tree = new BinaryTree();
      tree.insertInLevelOrder(10);
      tree.insertInLevelOrder(20);
      tree.insertInLevelOrder(30);
      /**
       *     10
       *    /   \
       *  20     30
       */
      expect(tree.size()).to.equal(3);
    });
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

  describe('BinaryTree.traverseInLeverOrder', () => {
    it('should return an empty array cause tree is empty', () => {
      const tree = new BinaryTree();
      expect(tree.traverseInLevelOrder()).to.deep.equal([]);
    });

    it('should return an array with single element cause tree has only root', () => {
      const tree = new BinaryTree();
      tree.root = new BinaryTreeNode(10);
      expect(tree.traverseInLevelOrder()).to.deep.equal([10]);
    });

    it('should return an array with for tree with has only root and left child', () => {
      const tree = new BinaryTree();
      tree.root = new BinaryTreeNode(10);
      tree.root.left = new BinaryTreeNode(20);
      expect(tree.traverseInLevelOrder()).to.deep.equal([10, 20]);
    });

    it('should return an array with for tree with has only root and right child', () => {
      const tree = new BinaryTree();
      tree.root = new BinaryTreeNode(10);
      tree.root.right = new BinaryTreeNode(20);
      expect(tree.traverseInLevelOrder()).to.deep.equal([10, 20]);
    });

    it('should return an array with for filled tree', () => {
      const tree = new BinaryTree();
      tree.insertInLevelOrder(10);
      tree.insertInLevelOrder(20);
      tree.insertInLevelOrder(30);
      /**
       *     10
       *    /   \
       *  20     30
       *
       */
      expect(tree.traverseInLevelOrder()).to.deep.equal([10, 20, 30]);
    });

    it('should return an array with for tree', () => {
      const tree = new BinaryTree();
      /**
       *           Tree
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
      expect(tree.traverseInLevelOrder()).to.deep.equal([10, 11, 9, 7, 15, 8]);
    });
  });

  describe('BinaryTree.traverseInOrder', () => {
    it('should return an empty array cause tree is empty', () => {
      const tree = new BinaryTree();
      expect(tree.traverseInOrder()).to.deep.equal([]);
    });

    it('should return an array with single element cause tree has only root', () => {
      const tree = new BinaryTree();
      tree.root = new BinaryTreeNode(10);
      expect(tree.traverseInOrder()).to.deep.equal([10]);
    });

    it('should return an array with for tree with has only root and left child', () => {
      const tree = new BinaryTree();
      tree.root = new BinaryTreeNode(10);
      tree.root.left = new BinaryTreeNode(20);
      expect(tree.traverseInOrder()).to.deep.equal([20, 10]);
    });

    it('should return an array with for tree with has only root and right child', () => {
      const tree = new BinaryTree();
      tree.root = new BinaryTreeNode(10);
      tree.root.right = new BinaryTreeNode(20);
      expect(tree.traverseInOrder()).to.deep.equal([10, 20]);
    });

    it('should return an array with for filled tree', () => {
      const tree = new BinaryTree();
      tree.insertInLevelOrder(10);
      tree.insertInLevelOrder(20);
      tree.insertInLevelOrder(30);
      /**
       *     10
       *    /   \
       *  20     30
       *
       */
      expect(tree.traverseInOrder()).to.deep.equal([20, 10, 30]);
    });

    it('should return an array with for tree', () => {
      const tree = new BinaryTree();
      /**
       *          Tree
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
      expect(tree.traverseInOrder()).to.deep.equal([7, 11, 10, 15, 9, 8]);
    });
  });

  describe('BinaryTree.traversePreOrder', () => {
    it('should return an empty array cause tree is empty', () => {
      const tree = new BinaryTree();
      expect(tree.traversePreOrder()).to.deep.equal([]);
    });

    it('should return an array with single element cause tree has only root', () => {
      const tree = new BinaryTree();
      tree.root = new BinaryTreeNode(10);
      expect(tree.traversePreOrder()).to.deep.equal([10]);
    });

    it('should return an array with for tree with has only root and left child', () => {
      const tree = new BinaryTree();
      tree.root = new BinaryTreeNode(10);
      tree.root.left = new BinaryTreeNode(20);
      expect(tree.traversePreOrder()).to.deep.equal([10, 20]);
    });

    it('should return an array with for tree with has only root and right child', () => {
      const tree = new BinaryTree();
      tree.root = new BinaryTreeNode(10);
      tree.root.right = new BinaryTreeNode(20);
      expect(tree.traversePreOrder()).to.deep.equal([10, 20]);
    });

    it('should return an array with for filled tree', () => {
      const tree = new BinaryTree();
      tree.insertInLevelOrder(10);
      tree.insertInLevelOrder(20);
      tree.insertInLevelOrder(30);
      /**
       *     10
       *    /   \
       *  20     30
       *
       */
      expect(tree.traversePreOrder()).to.deep.equal([10, 20, 30]);
    });

    it('should return an array with for tree', () => {
      const tree = new BinaryTree();
      /**
       *          Tree
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
      expect(tree.traversePreOrder()).to.deep.equal([10, 11, 7, 9, 15, 8]);
    });
  });

  describe('BinaryTree.traversePostOrder', () => {
    it('should return an empty array cause tree is empty', () => {
      const tree = new BinaryTree();
      expect(tree.traversePostOrder()).to.deep.equal([]);
    });

    it('should return an array with single element cause tree has only root', () => {
      const tree = new BinaryTree();
      tree.root = new BinaryTreeNode(10);
      expect(tree.traversePostOrder()).to.deep.equal([10]);
    });

    it('should return an array with for tree with has only root and left child', () => {
      const tree = new BinaryTree();
      tree.root = new BinaryTreeNode(10);
      tree.root.left = new BinaryTreeNode(20);
      expect(tree.traversePostOrder()).to.deep.equal([20, 10]);
    });

    it('should return an array with for tree with has only root and right child', () => {
      const tree = new BinaryTree();
      tree.root = new BinaryTreeNode(10);
      tree.root.right = new BinaryTreeNode(20);
      expect(tree.traversePostOrder()).to.deep.equal([20, 10]);
    });

    it('should return an array with for filled tree', () => {
      const tree = new BinaryTree();
      tree.insertInLevelOrder(10);
      tree.insertInLevelOrder(20);
      tree.insertInLevelOrder(30);
      /**
       *     10
       *    /   \
       *  20     30
       *
       */
      expect(tree.traversePostOrder()).to.deep.equal([20, 30, 10]);
    });

    it('should return an array with for tree', () => {
      const tree = new BinaryTree();
      /**
       *          Tree
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
      expect(tree.traversePostOrder()).to.deep.equal([7, 11, 15, 8, 9, 10]);
    });
  });
});
