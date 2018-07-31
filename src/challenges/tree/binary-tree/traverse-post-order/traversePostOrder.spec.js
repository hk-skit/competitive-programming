const should = require('should');
const { expect } = require('chai');
const sinon = require('sinon');
const BinaryTree = require('../../../../data-structures/tree/binary-tree/BinaryTree');
const BinaryTreeNode = require('../../../../data-structures/tree/binary-tree/BinaryTreeNode');
const traversePostOrder = require('./traversePostOrder');

describe('BinaryTree.traversePostOrder', () => {
  it('should return an empty array cause tree is empty', () => {
    expect(traversePostOrder(null)).to.deep.equal([]);
  });

  it('should return an array with single element cause tree has only root', () => {
    const tree = new BinaryTree();
    tree.root = new BinaryTreeNode(10);
    expect(traversePostOrder(tree.root)).to.deep.equal([10]);
  });

  it('should return an array with for tree with has only root and left child', () => {
    const tree = new BinaryTree();
    tree.root = new BinaryTreeNode(10);
    tree.root.left = new BinaryTreeNode(20);
    expect(traversePostOrder(tree.root)).to.deep.equal([20, 10]);
  });

  it('should return an array with for tree with has only root and right child', () => {
    const tree = new BinaryTree();
    tree.root = new BinaryTreeNode(10);
    tree.root.right = new BinaryTreeNode(20);
    expect(traversePostOrder(tree.root)).to.deep.equal([20, 10]);
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
    expect(traversePostOrder(tree.root)).to.deep.equal([20, 30, 10]);
  });

  it('should return post order traversal', () => {
    /**
     *   1
     *    \
     *     2
     *    /
     *   3
     */
    const tree = new BinaryTree();
    tree.root = new BinaryTreeNode(1);
    tree.root.setRight(new BinaryTreeNode(2));
    tree.root.right.setLeft(new BinaryTreeNode(3));
    expect(tree.traversePostOrder()).to.deep.equal([3, 2, 1]);
  });

  it('should return an post order traversal in array for tree', () => {
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
    expect(traversePostOrder(tree.root)).to.deep.equal([7, 11, 15, 8, 9, 10]);
  });
});
