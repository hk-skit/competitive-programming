const Queue = require('./Queue');
const should = require('should');
const { expect } = require('chai');
const sinon = require('sinon');
describe('Queue', () => {
  let queue;
  let items;
  beforeEach(() => {
    queue = new Queue();
    items = [1, 2, 3, 4, 5];
  });
  it('should create an empty queue', () => {
    expect(queue.isEmpty()).to.equal(true);
    expect(queue.size).to.equal(0);
    expect(queue.front()).to.equal(null);
    expect(queue.rear()).to.equal(null);
  });

  it('should enqueue item to the queue', () => {
    items.forEach((i) => queue.enqueue(i));
    expect(queue.size).to.equal(items.length);
    expect(queue.front()).to.equal(items[0]);
    expect(queue.rear()).to.equal(items[items.length - 1]);
  });

  it('should dequeue items from the queue', () => {
    items.forEach((i) => queue.enqueue(i));
    expect(queue.size).to.equal(items.length);
    while (items.length) {
      expect(queue.dequeue()).to.equal(items.shift());
    }
    expect(queue.dequeue()).to.equal(null);
    expect(queue.front()).to.equal(null);
    expect(queue.rear()).to.equal(null);
  });

  describe('Queue.toArray', () => {
    it('should return an empty array cause queue is empty', () => {
      expect(queue.toArray()).to.deep.equal([]);
    });

    it('should return an array', () => {
      items.forEach((i) => queue.enqueue(i));
      expect(queue.toArray()).to.deep.equal(items);
    });
  });

  describe('Queue.toString', () => {
    it('should return an empty string cause queue is empty', () => {
      expect(queue.toString()).to.deep.equal('');
    });

    it('should convert array to string', () => {
      items.forEach((i) => queue.enqueue(i));
      expect(queue.toString()).to.equal(items.toString());
    });

    it('should convert array to string with callback', () => {
      items.forEach((i) => queue.enqueue(i));
      const cb = (item) => `-${item}-`;
      expect(queue.toString(cb)).to.equal(items.map(cb).toString());
    });
  });
});
