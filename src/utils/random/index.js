/**
 * Creates an array with random values.
 *
 * @param {*} {
 *   length = Math.floor(Math.random() * 100)
 * }
 * @returns
 */
const createArray = ({ size = 10 } = {}) =>
  [...Array(size)].map((v, i) => Math.floor(Math.random() * Date.now()) + i);

const number = (start = 100, end = 0) => {
  const random = Math.floor(Math.random() * Math.abs(end - start));
  if (end < start) {
    return random + end;
  }
  return random + start;
};

module.exports = {
  createArray,
  number
};
