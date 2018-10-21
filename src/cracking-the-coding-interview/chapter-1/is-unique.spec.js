const isUnique = require('./is-unique');
const should = require('should');
const { expect } = require('chai');
const sinon = require('sinon');

describe('isUnique', () => {
  it('should return true cause string has unique characters', () => {
    ['', 'a', 'abc', 'xyzsdf'].forEach((str) =>
      expect(isUnique(str)).to.be.equal(true)
    );
  });

  it('should return false cause string does not have unique characters', () => {
    ['aca', 'aaa', 'ababab'].forEach((str) =>
      expect(isUnique(str)).to.be.equal(false)
    );
  });
});
