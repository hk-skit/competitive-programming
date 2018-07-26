const should = require('should');
const { expect } = require('chai');
const sinon = require('sinon');
const BinaryTree = require('../../../../data-structures/tree/binary-tree/BinaryTree');
const BinaryTreeNode = require('../../../../data-structures/tree/binary-tree/BinaryTreeNode');
const isContinous = require('./isContinous');

describe('BinaryTree.isContinous', () => {
  it('should return true cause tree is empty', () => {
    expect(isContinous(null)).to.equal(true);
  });

  it('shoud reutrn true cause tree at only root node', () => {
    const tree = new BinaryTree();
    tree.insertInLevelOrder(10);
    expect(isContinous(tree.root)).to.equal(true);
  });

  it('should return true cause tree is continus', () => {
    /**
     *              3
     *            /   \
     *           2     4
     *          / \    /
     *         1   3  5
     */
    const tree = [3, 2, 4, 1, 3, 5].reduce((_tree, value) => {
      _tree.insertInLevelOrder(value);
      return _tree;
    }, new BinaryTree());
    expect(isContinous(tree.root)).to.equal(true);
  });

  it('should return false cause tree is not continus', () => {
    /**
     *              3
     *            /   \
     *           2     4
     *          / \    /
     *         1   3  10
     */
    const tree = [3, 2, 4, 1, 3, 10].reduce((_tree, value) => {
      _tree.insertInLevelOrder(value);
      return _tree;
    }, new BinaryTree());
    expect(isContinous(tree.root)).to.equal(false);
  });

  it('should return false cause tree is not continus', () => {
    /**
     *              3
     *            /   \
     *           2      4
     *          / \    / \
     *         1   3  5   10
     */
    const tree = [3, 2, 4, 1, 3, 5, 10].reduce((_tree, value) => {
      _tree.insertInLevelOrder(value);
      return _tree;
    }, new BinaryTree());
    expect(isContinous(tree.root)).to.equal(false);
  });
});
