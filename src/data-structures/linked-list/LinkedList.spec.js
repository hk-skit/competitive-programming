const should = require('should');
const { expect } = require('chai');
const sinon = require('sinon');
const LinkedList = require('./LinkedList');

describe('LinkedList', () => {
  it('should create an empty linked list', () => {
    const list = new LinkedList();
    expect(list.length).to.equal(0);
    expect(list.toArray()).to.deep.equal([]);
    expect(list.toString()).to.equal('');
    expect(list.head).to.equal(null);
    expect(list.removeHead()).to.equal(null);
    expect(list.removeTail()).to.equal(null);
  });

  it('should return length of the list', () => {
    const list = new LinkedList();
    expect(list.length).to.equal(0);
    const items = [1, 2, 3];
    items.forEach((n) => list.append(n));
    expect(list.length).to.equal(items.length);
  });

  describe('LinkedList.prepend', () => {
    it('should prepend to linked list', () => {
      const list = new LinkedList();
      list.prepend(10);
      list.prepend(20);
      expect(list.toString()).to.deep.equal('20,10');
    });
  });

  describe('LinkedList.append', () => {
    it('should append item to linked list', () => {
      const list = new LinkedList();
      list.append(10);
      list.append(20);
      expect(list.toString()).to.deep.equal('10,20');
    });
  });

  describe('LinkedList.remove', () => {
    it('should return deleted node from linked list.', () => {
      const list = new LinkedList();
      list.append(10);
      list.append(20);
      list.append(30);
      const deletedNode = list.remove(20);
      expect(deletedNode).to.deep.equal({ value: 20, next: null });
      expect(list.toString()).to.equal('10,30');
    });

    it('should return null cause value is not present in the list', () => {
      const list = new LinkedList();
      list.append(10);
      list.append(20);
      list.append(30);
      const deletedNode = list.remove(40);
      expect(deletedNode).to.deep.equal(null);
      expect(list.toString()).to.equal('10,20,30');
    });

    it('should null cause list is empty', () => {
      const list = new LinkedList();
      const deletedNode = list.remove(40);
      expect(deletedNode).to.deep.equal(null);
      expect(list.toString()).to.equal('');
    });

    it('should return head cause only one element is in list', () => {
      const list = new LinkedList();
      list.append(40);
      const deletedNode = list.remove(40);
      expect(deletedNode.toString()).to.deep.equal('40');
      expect(list.toString()).to.equal('');
    });

    it('should return tail node cause value is matching to tail', () => {
      const list = new LinkedList();
      list.append(10);
      list.prepend(20);
      const deletedNode = list.remove(10);
      expect(deletedNode).to.deep.equal({ value: 10, next: null });
      expect(list.length).to.equal(1);
    });
  });

  describe('LinkedList.removeHead', () => {
    it('should return null cause list is empty', () => {
      const list = new LinkedList();
      const head = list.removeHead();
      expect(head).to.equal(null);
      expect(list.toString()).to.equal('');
    });
    it('should remove head and return it', () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      const head = list.removeHead();
      expect(head.toString()).to.equal('1');
      expect(list.toString()).to.equal('2,3');
    });
  });

  describe('LinkedList.removeTail', () => {
    it('should return null cause list is empty', () => {
      const list = new LinkedList();
      const tail = list.removeTail();
      expect(tail).to.equal(null);
      expect(list.toString()).to.equal('');
    });
    it('should remove tail and return it', () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      const tail = list.removeTail();
      expect(tail.toString()).to.equal('3');
      expect(list.toString()).to.equal('1,2');
    });
    it('should return tail when only one element is in list', () => {
      const list = new LinkedList();
      list.append(40);
      const deletedNode = list.removeTail(40);
      expect(deletedNode.toString()).to.deep.equal('40');
      expect(list.toString()).to.equal('');
    });
  });

  describe('LinkedList.find', () => {
    it('should return node cause item is present in list', () => {
      const list = new LinkedList();
      list.append(10);
      list.append(20);
      list.append(30);
      list.append(40);
      const n = list.find(20);
      expect(n.toString()).to.equal('20');
      expect(list.toString()).to.equal('10,20,30,40');
    });

    it('should return null cause node is not present', () => {
      const list = new LinkedList();
      list.append(10);
      list.append(20);
      list.append(30);
      list.append(40);
      const n = list.find(50);
      expect(n).to.equal(null);
      expect(list.toString()).to.equal('10,20,30,40');
    });
  });
});
