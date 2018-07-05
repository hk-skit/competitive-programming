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

  it('should throw stack underflow error', () => {
    const stack = new Stack();
    expect(() => stack.pop())
      .to.throw()
      .with.property('message', stack.UNDERFLOW);
  });

  it('should push/pop items to/from stack', () => {
    const stack = new Stack();
    const items = [1, 2, 3, 4, 5, 6, 7, 8];
    items.forEach((n) => stack.push(n));
    while (items.length) {
      expect(stack.pop()).to.equal(items.pop());
    }
    expect(stack.peek()).to.equal(null);
    expect(stack.isEmpty()).to.equal(true);
  });

  it('should throw stack overflow error.', () => {
    const stack = new Stack(0);
    expect(() => stack.push(0))
      .to.throw()
      .with.property('message', stack.OVERFLOW);
  });
});
