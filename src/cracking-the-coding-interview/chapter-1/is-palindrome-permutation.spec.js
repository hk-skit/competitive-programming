const isPalindromePermutation = require('./is-palindrome-permutation');
const should = require('should');
const { expect } = require('chai');
const sinon = require('sinon');

describe('isPalindromePermutation', () => {
  it('should return true cause strings are palindrome permutations', () => {
    ['abcba', 'abcbc', 'ab ab', 'ab ab c', 'a', 'a c a'].forEach((str) =>
      expect(isPalindromePermutation(str)).to.equal(true)
    );
  });

  it('should return false cause strings are not palindrome permutations', () => {
    ['abdaab', 'a b'].forEach((str) =>
      expect(isPalindromePermutation(str)).to.equal(false)
    );
  });
});
