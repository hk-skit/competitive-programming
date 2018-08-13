const should = require('should');
const { expect } = require('chai');
const sinon = require('sinon');
const Trie = require('./Trie');

describe('Trie', () => {
  it('should initialize trie', () => {
    const trie = new Trie();
    expect(trie.root).not.to.equal(undefined);
    expect(trie.getWords()).deep.to.equal([]);
  });

  it('should store words to trie', () => {
    const words = [
      'hop',
      'hope',
      'hi',
      'high',
      'height',
      'hit',
      'humble',
      'cat',
      'card',
      'cow',
      'camel',
      'cardio',
      'cordial'
    ];
    const trie = new Trie();
    words.forEach((word) => trie.store(word));
    expect(trie.getWords().sort()).to.deep.equal(words.sort());
  });

  it('should check if word is in trie or not', () => {
    const words = ['hop', 'hope', 'hi', 'high', 'cardio', 'cordial'];
    const notPresent = [
      'height',
      'hit',
      'humble',
      'cat',
      'card',
      'cow',
      'camel'
    ];
    const trie = new Trie();
    words.forEach((word) => trie.store(word));
    expect(words.every((word) => trie.isWord(word))).to.equal(true);
    expect(notPresent.every((word) => !trie.isWord(word))).to.equal(true);
  });

  describe('Trie.suggestWords', () => {
    it('should suggest words', () => {
      const words = [
        'hop',
        'hope',
        'hi',
        'high',
        'cardio',
        'cordial',
        'height',
        'hit',
        'humble',
        'cat',
        'card',
        'cow',
        'camel'
      ];
      const suggestions = ['hi', 'high', 'hit'].sort();
      const trie = new Trie();
      words.forEach((word) => trie.store(word));
      expect(trie.suggestWords('hi').sort()).deep.to.equal(suggestions);
    });

    it('should not return any word cause no suggestion present', () => {
      const words = [
        'hop',
        'hope',
        'hi',
        'high',
        'cardio',
        'cordial',
        'height',
        'hit',
        'humble',
        'cat',
        'card',
        'cow',
        'camel'
      ];
      const trie = new Trie();
      words.forEach((word) => trie.store(word));
      expect(trie.suggestWords('x')).to.deep.equal([]);
    });
  });
});
