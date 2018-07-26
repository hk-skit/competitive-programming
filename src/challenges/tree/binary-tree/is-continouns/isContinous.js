/**
 *
 * @param {*} root
 * @param {*} diff
 */
const isContinous = (root, diff = 1) => {
  if (root === null) {
    return true;
  }

  const { value, left, right } = root;

  if (left === null && right === null) {
    return true;
  }

  if (left !== null && Math.abs(value - left.value) !== diff) {
    return false;
  }

  if (right !== null && Math.abs(value - right.value) !== diff) {
    return false;
  }

  return isContinous(left) && isContinous(right);
};

module.exports = isContinous;
