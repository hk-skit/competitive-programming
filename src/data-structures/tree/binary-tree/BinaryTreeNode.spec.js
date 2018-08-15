const should = require('should');
const { expect } = require('chai');
const sinon = require('sinon');
const BinaryTreeNode = require('./BinaryTreeNode');

describe('BinaryTreeNode', () => {
  it('should create a node', () => {
    const node = new BinaryTreeNode(10);
    expect(node.value).to.equal(10);
    expect(node.left).to.equal(null);
    expect(node.right).to.equal(null);
  });

  describe('BinaryTreeNode.traverseInorder', () => {
    it('should traverse in order where there is no child', () => {
      const node = new BinaryTreeNode(10);
      expect(node.value).to.equal(10);
      expect(node.left).to.equal(null);
      expect(node.right).to.equal(null);
      expect(node.traverseInOrder()).to.deep.equal([10]);
    });

    it('should traverse in order when node has only a left child', () => {
      const node = new BinaryTreeNode(10);
      node.setLeft(new BinaryTreeNode(20));
      expect(node.right).to.equal(null);
      expect(node.traverseInOrder()).to.deep.equal([20, 10]);
    });

    it('should traverse in order when tree has only left children', () => {
      const node = new BinaryTreeNode(10);
      node.setLeft(new BinaryTreeNode(20)).left.setLeft(new BinaryTreeNode(30));
      expect(node.right).to.equal(null);
      expect(node.traverseInOrder()).to.deep.equal([30, 20, 10]);
    });

    it('should traverse in order when node has only a right child', () => {
      const node = new BinaryTreeNode(10);
      node.setRight(new BinaryTreeNode(20));
      expect(node.left).to.equal(null);
      expect(node.traverseInOrder()).to.deep.equal([10, 20]);
    });

    it('should traverse in order when node has only right children', () => {
      const node = new BinaryTreeNode(10);
      node
        .setRight(new BinaryTreeNode(20))
        .right.setRight(new BinaryTreeNode(30));
      expect(node.left).to.equal(null);
      expect(node.traverseInOrder()).to.deep.equal([10, 20, 30]);
    });

    it('should traverse in order when node has both left and right children', () => {
      const node = new BinaryTreeNode(10);
      node.setLeft(new BinaryTreeNode(11)).left.setLeft(new BinaryTreeNode(7));
      node
        .setRight(new BinaryTreeNode(9))
        .right.setLeft(new BinaryTreeNode(15));
      node.right.setRight(new BinaryTreeNode(8));
      /**
       *
       *            10
       *           /   \
       *         11     9
       *        /      /  \
       *      7       15    8
       */
      expect(node.traverseInOrder()).to.deep.equal([7, 11, 10, 15, 9, 8]);
    });
  });

  describe('BinaryTreeNode.minHeight', () => {
    it('should return one cause leaf node', () => {
      const node = new BinaryTreeNode(10);
      expect(node.minHeight()).to.equal(1);
    });

    it('should return height of left tree including node cause right is null', () => {
      const node = new BinaryTreeNode(10);
      node.setLeft(new BinaryTreeNode(20));
      expect(node.minHeight()).to.equal(2);
    });

    it('should return height of right tree including node cause left is null', () => {
      const node = new BinaryTreeNode(10);
      node.setRight(new BinaryTreeNode(20));
      expect(node.minHeight()).to.equal(2);
    });

    it('should return min height', () => {
      const node = new BinaryTreeNode(10);
      const left = new BinaryTreeNode(30);
      left.setLeft(new BinaryTreeNode(50));
      node.setRight(new BinaryTreeNode(20));
      node.setLeft(left);
      expect(node.minHeight()).to.equal(2);
    });
  });

  describe('BinaryTreeNode.isBalanced', () => {
    it('should return true trees ara balanced', () => {
      const nodes = [
        // leaf node.
        (() => {
          const node = new BinaryTreeNode(10);
          return node;
        })(),
        // root and left
        (() => {
          const node = new BinaryTreeNode(10);
          node.setLeft(new BinaryTreeNode(30));
          return node;
        })(),
        // root and right.
        (() => {
          const node = new BinaryTreeNode(10);
          node.setRight(new BinaryTreeNode(30));
          return node;
        })(),
        // Full binary tree
        (() => {
          const node = new BinaryTreeNode(10);
          node.setRight(new BinaryTreeNode(30));
          node.setLeft(new BinaryTreeNode(20));
          return node;
        })(),
        (() => {
          const node = new BinaryTreeNode(10);
          const left = new BinaryTreeNode(30);
          left.setLeft(new BinaryTreeNode(50));
          node.setRight(new BinaryTreeNode(30));
          node.setLeft(left);
          return node;
        })(),
        (() => {
          const node = new BinaryTreeNode(10);
          const right = new BinaryTreeNode(30);
          right.setLeft(new BinaryTreeNode(50));
          node.setLeft(new BinaryTreeNode(30));
          node.setRight(right);
          return node;
        })()
      ];
      nodes.forEach((node) => expect(node.isBalanced()).to.equal(true));
    });
  });
});
