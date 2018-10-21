const isPermutation = require('./is-permutation');
const should = require('should');
const { expect } = require('chai');
const sinon = require('sinon');

describe('isPermutation', () => {
  it('should return true cause strings are permutation of each other', () => {
    [
      {
        strA: '',
        strB: ''
      },
      {
        strA: 'a',
        strB: 'a'
      },
      {
        strA: 'abc',
        strB: 'cab'
      }
    ].forEach(({ strA, strB }) =>
      expect(isPermutation(strA, strB)).to.equal(true)
    );
  });

  it('should return false cause string are not permutations of each other.', () => {
    [
      {
        strA: 'a',
        strB: ''
      },
      {
        strA: 'a',
        strB: 'b'
      },
      {
        strA: 'abc',
        strB: 'cad'
      }
    ].forEach(({ strA, strB }) =>
      expect(isPermutation(strA, strB)).to.equal(false)
    );
  });
});
