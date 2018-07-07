const should = require('should');
const { expect } = require('chai');
const sinon = require('sinon');
const Stack = require('./Stack');

describe('Stack', () => {
  it('should create an empty stack', () => {
    const stack = new Stack();
    expect(stack.peek()).to.equal(null);
    expect(stack.isEmpty()).to.equal(true);
  });

  describe('Stack.pop', () => {
    it('should throw stack underflow error', () => {
      const stack = new Stack();
      expect(() => stack.pop())
        .to.throw()
        .with.property('message', stack.UNDERFLOW);
    });

    it('should pop the items from stack', () => {
      const stack = new Stack();
      const items = [1, 2, 3, 4, 5, 6, 7, 8];
      items.forEach((n) => stack.push(n));
      stack.pop();
      stack.pop();
      expect(stack.toArray()).to.deep.equal([6, 5, 4, 3, 2, 1]);
    });
  });

  describe('Stack.push', () => {
    it('should throw stack overflow error.', () => {
      const stack = new Stack(0);
      expect(() => stack.push(0))
        .to.throw()
        .with.property('message', stack.OVERFLOW);
    });
    it('should push the items to stack', () => {
      const stack = new Stack();
      const items = [1, 2, 3, 4, 5, 6, 7, 8];
      items.forEach((n) => stack.push(n));
      expect(stack.toArray()).to.deep.equal([...items].reverse());
    });
  });

  describe('Stack.peek', () => {
    it('should give the peek/top of the stack', () => {
      const stack = new Stack();
      stack.push(10);
      expect(stack.peek()).to.equal(10);
    });
  });

  describe('Stack.toString', () => {
    it('should return empty string cause stack is empty', () => {
      const stack = new Stack();
      expect(stack.peek()).to.equal(null);
      expect(stack.isEmpty()).to.equal(true);
      expect(stack.toString()).to.equal('');
    });

    it('should convert stack to string without callback', () => {
      const stack = new Stack();
      const items = [1, 2, 3, 4, 5, 6, 7, 8];
      items.forEach((n) => stack.push(n));
      stack.pop();
      stack.pop();
      expect(stack.toString()).to.equal('6,5,4,3,2,1');
    });

    it('should convert stack to string with callback', () => {
      const stack = new Stack();
      const items = [1, 2, 3, 4, 5, 6, 7, 8];
      items.forEach((n) => stack.push(n));
      stack.pop();
      stack.pop();
      expect(stack.toString((i) => `${i}-`)).to.equal('6-,5-,4-,3-,2-,1-');
    });
  });
});
