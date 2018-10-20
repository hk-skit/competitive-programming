const getBit = require('./getBit');
const should = require('should');
const { expect } = require('chai');
const sinon = require('sinon');

describe('getBit', () => {
  it('should have return bit at desired position', () => {
    const data = [
      {
        number: 10, // 1010
        position: 1,
        result: 1
      },
      {
        number: 5, //101
        position: 2,
        result: 1
      },
      {
        number: 4, // 100
        position: 3,
        result: 0
      },
      {
        number: -9, // 11111111111111111111111111110111
        position: 3,
        result: 0
      },
      {
        number: -9, // 11111111111111111111111111110111
        position: 4,
        result: 1
      }
    ];
    data.forEach(({ number, position, result }) => {
      expect(getBit(number, position)).to.equal(result);
    });
  });
});
