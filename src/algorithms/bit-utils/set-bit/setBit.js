/**
 * Sets a value of a bit returns new number.
 * Method left shift 1 by zero based @param position count which creates
 * value like 00100, then perform OR operation with @param number.
 *
 * @param {*} number
 * @param {*} position
 * @returns
 */
const setBit = (number, position) => {
  return number | (1 << position);
};

module.exports = setBit;
