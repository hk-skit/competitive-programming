const clearBit = require('./clearBit');
const should = require('should');
const { expect } = require('chai');
const sinon = require('sinon');

describe('clearBit', () => {
  it('should clear bit at desired position', () => {
    const data = [
      {
        number: 10, // 1010
        position: 1,
        result: 8
      },
      {
        number: 5, //101
        position: 2,
        result: 1
      },
      {
        number: 4, // 100
        position: 3,
        result: 4
      },
      {
        number: -9, // 11111111111111111111111111110111
        position: 3,
        result: -9
      },
      {
        number: -9, // 11111111111111111111111111110111
        position: 4,
        result: -25
      }
    ];
    data.forEach(({ number, position, result }) => {
      expect(clearBit(number, position)).to.equal(result);
    });
  });
});
