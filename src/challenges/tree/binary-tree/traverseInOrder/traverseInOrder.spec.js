const should = require('should');
const { expect } = require('chai');
const sinon = require('sinon');
const BinaryTree = require('../../../../data-structures/tree/binary-tree/BinaryTree');
const BinaryTreeNode = require('../../../../data-structures/tree/binary-tree/BinaryTreeNode');
const traverseInOrder = require('./traverseInOrder');

describe('BinaryTree.traverseInOrder', () => {
  it('should return an empty array cause tree is empty', () => {
    const tree = new BinaryTree();
    expect(traverseInOrder(tree.root)).to.deep.equal([]);
  });

  it('should return an array with single element cause tree has only root', () => {
    const tree = new BinaryTree();
    tree.root = new BinaryTreeNode(10);
    expect(traverseInOrder(tree.root)).to.deep.equal([10]);
  });

  it('should return an array with for tree with has only root and left child', () => {
    const tree = new BinaryTree();
    tree.root = new BinaryTreeNode(10);
    tree.root.left = new BinaryTreeNode(20);
    expect(traverseInOrder(tree.root)).to.deep.equal([20, 10]);
  });

  it('should return an array with for tree with has only root and right child', () => {
    const tree = new BinaryTree();
    tree.root = new BinaryTreeNode(10);
    tree.root.right = new BinaryTreeNode(20);
    expect(traverseInOrder(tree.root)).to.deep.equal([10, 20]);
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
    expect(traverseInOrder(tree.root)).to.deep.equal([20, 10, 30]);
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
    expect(traverseInOrder(tree.root)).to.deep.equal([7, 11, 10, 15, 9, 8]);
  });
});
