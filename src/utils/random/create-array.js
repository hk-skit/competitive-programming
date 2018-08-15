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

module.exports = createArray;
