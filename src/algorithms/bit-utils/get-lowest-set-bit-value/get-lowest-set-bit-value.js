/**
 * Returns the value of least significant bit that is on(bit from right that
 * is on).
 *
 * @param {*} number
 * @returns
 */
const getLowestSetBitValue = (number) => {
  return number & -number;
};

module.exports = getLowestSetBitValue;
