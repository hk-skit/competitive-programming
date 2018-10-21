/**
 * Returns true if string characters in string are unique.
 * @param {*} str
 */
const isUnique = (str) => {
  const map = new Map();
  for (let index = 0; index < str.length; index += 1) {
    const char = str[index];
    if (map.get(char)) {
      return false;
    }
    map.set(char, true);
  }
  return true;
};

module.exports = isUnique;
