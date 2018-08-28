/**
 * Clears the bit in a number and returns the new number.
 * Method left shifts 1 by zero based @param position count which creates value
 * like 00100 then inverts it. Then performs AND operation with number.
 *
 * @param {*} number
 * @param {*} position
 * @returns
 */
const clearBit = (number, position) => {
  const mask = ~(1 << position);
  return number & mask;
};

module.exports = clearBit;
