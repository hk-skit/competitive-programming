const setBit = require('./setBit');
const should = require('should');
const { expect } = require('chai');
const sinon = require('sinon');

describe('setBit', () => {
  it('should set the bit at desired position', () => {
    const data = [
      {
        number: 10, // 1010
        position: 1,
        result: 10
      },
      {
        number: 5, //101
        position: 1,
        result: 7
      },
      {
        number: 4, // 100
        position: 3,
        result: 12
      },
      {
        number: -9, // 11111111111111111111111111110111
        position: 3,
        result: -1
      },
      {
        number: -9, // 11111111111111111111111111110111
        position: 4,
        result: -9
      }
    ];
    data.forEach(({ number, position, result }) => {
      expect(setBit(number, position)).to.equal(result);
    });
  });
});
