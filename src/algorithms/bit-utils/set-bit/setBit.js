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
  if (position < 0) {
    // For negative shift count js has weird behavior.
    // https://stackoverflow.com/questions/16559921/left-shifting-with-a-negative-shift-count-in-javascript
    throw new Error(
      `setBit:position can not be negative. position: ${position}`
    );
  }
  return number | (1 << position);
};

module.exports = setBit;
