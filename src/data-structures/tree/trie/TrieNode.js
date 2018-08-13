/**
 * Represents a TrieNode.
 *
 * @export
 * @class TrieNode
 */
class TrieNode {
  /**
   * Creates an instance of TrieNode.
   * @memberof TrieNode
   */
  constructor() {
    // Reference to children <key, TrieNode>
    this.children = new Map();

    this._isCompleteWord = false;
  }

  /**
   * Returns true if the node represent a complete word or string
   *
   * @memberof TrieNode
   */
  get isCompleteWord() {
    return this._isCompleteWord;
  }

  /**
   *
   *
   * @memberof TrieNode
   */
  set isCompleteWord(value) {
    this._isCompleteWord = value;
  }
}

module.exports = TrieNode;
