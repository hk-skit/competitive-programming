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
});
