const should = require('should');
const { expect } = require('chai');
const sinon = require('sinon');
const BinaryTree = require('../../../../data-structures/tree/binary-tree/BinaryTree');
const BinaryTreeNode = require('../../../../data-structures/tree/binary-tree/BinaryTreeNode');
const deleteLeaves = require('./deleteLeaves');

describe('BinaryTree.levelOrderTraversal', () => {
  it('should return null when root is null', () => {
    expect(deleteLeaves(null, 10)).to.equal(null);
  });

  it('should delete root node', () => {
    const tree = new BinaryTree();
    tree.root = new BinaryTreeNode(10);
    expect(deleteLeaves(tree.root, 10)).to.equal(null);
  });

  it('should not delete root node cause value is not matching', () => {
    const tree = new BinaryTree();
    tree.root = new BinaryTreeNode(10);
    expect(deleteLeaves(tree.root, 11)).to.not.equal(null);
  });

  it('should delete left leaf', () => {
    const tree = new BinaryTree();
    tree.root = new BinaryTreeNode(10);
    tree.insertInLevelOrder(20);
    expect(deleteLeaves(tree.root, 20)).to.not.equal(null);
    expect(tree.root.left).to.equal(null);
  });

  it('should delete right leaf', () => {
    const tree = new BinaryTree();
    tree.root = new BinaryTreeNode(10);
    tree.insertInLevelOrder(20);
    tree.insertInLevelOrder(30);
    expect(deleteLeaves(tree.root, 30)).to.not.equal(null);
    expect(tree.root.left).to.not.equal(null);
    expect(tree.root.right).to.equal(null);
  });
});
