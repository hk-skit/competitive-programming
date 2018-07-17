const should = require('should');
const { expect } = require('chai');
const reverse = require('./reverse');
const LinkedList = require('../../../data-structures/linked-list/LinkedList');
describe('LinkedList:reverse', function() {
  it('should reverse an empty list', function() {
    const list = reverse(null);
    expect(list).deep.equal(null);
  });

  it('should reverse the list', function() {
    const array = [1, 2, 3, 4, 5, 6];
    let { head } = LinkedList.toLinkedList(...array);
    head = reverse(head);
    expect(head).deep.equal(LinkedList.toLinkedList(...array.reverse()).head);
  });
});
