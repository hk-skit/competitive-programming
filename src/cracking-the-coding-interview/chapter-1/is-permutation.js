/**
 * Returns true if strA is permutation of strB.
 *
 * @param {string} strA
 * @param {string} strB
 */
const isPermutation = (strA, strB) => {
  if (strA.length !== strB.length) {
    return false;
  }
  const map = new Map();
  for (let index = 0; index < strA.length; index += 1) {
    const ch = strA[index];
    const n = map.get(ch) || 0;
    map.set(ch, n + 1);
  }

  for (let index = 0; index < strB.length; index += 1) {
    const ch = strB[index];
    const n = map.get(ch);
    if (!n) {
      return false;
    }
    map.set(ch, n - 1);
  }

  return true;
};

module.exports = isPermutation;
