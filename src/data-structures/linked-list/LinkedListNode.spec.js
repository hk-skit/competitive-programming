const should = require('should');
const { expect } = require('chai');
const sinon = require('sinon');
const LinkedListNode = require('./LinkedListNode');
describe('LinkedListNode', () => {
  it('shold create empty node', () => {
    const node = new LinkedListNode();
    expect(node.next).to.equal(null);
    expect(node.value).to.equal(undefined);
  });

  it('should create node with value', () => {
    const node = new LinkedListNode(10);
    expect(node.value).to.equal(10);
    expect(node.next).to.equal(null);
  });

  it('should create a node with next node', () => {
    const nextNode = new LinkedListNode(20);
    const node = new LinkedListNode(10, nextNode);
    expect(node.value).to.equal(10);
    expect(node.next).to.deep.equal(nextNode);
  });

  it('should convert node to string without callback', function() {
    const node = new LinkedListNode(10);
    expect(node.toString()).to.equal('10');
  });

  it('should convert node to string with callback', () => {
    const node = new LinkedListNode(10);
    expect(node.toString((i) => `Mr. ${i}`)).to.equal('Mr. 10');
  });
});
