const TrieNode = require('./TrieNode');

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * Stores word to trie.
   *
   * @param {string} word
   * @memberof Trie
   */
  store(word) {
    let current = this.root;
    for (let index = 0; index < word.length; index += 1) {
      const letter = word.charAt(index);
      if (!current.children.has(letter)) {
        const node = new TrieNode();
        current.children.set(letter, node);
        current = node;
      } else {
        current = current.children.get(letter);
      }
    }
    current.isCompleteWord = true;
  }

  /**
   *
   *
   * @param {*} word
   * @returns
   * @memberof Trie
   */
  isWord(word) {
    let current = this.root;
    for (let index = 0; index < word.length; index += 1) {
      const node = current.children.get(word.charAt(index));
      if (!node) {
        return false;
      }
      current = node;
    }
    return current.isCompleteWord;
  }

  /**
   *
   *
   * @param {*} [node=this.node]
   * @param {string} [prefix='']
   * @returns
   * @memberof Trie
   */
  getWords(node = this.root, prefix = '') {
    const words = node.isCompleteWord && prefix !== '' ? [prefix] : [];
    node.children.forEach((child, letter) => {
      words.push(...this.getWords(child, `${prefix}${letter}`));
    });
    return words;
  }

  /**
   *
   *
   * @param {*} prefix
   * @returns
   * @memberof Trie
   */
  suggestWords(prefix) {
    const words = [];
    let current = this.root;
    for (let index = 0; index < prefix.length; index += 1) {
      const node = current.children.get(prefix.charAt(index));
      if (!node) {
        return [];
      }
      current = node;
    }
    words.push(...this.getWords(current, prefix));
    return words;
  }
}

module.exports = Trie;
