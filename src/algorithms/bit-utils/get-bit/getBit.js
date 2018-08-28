/**
 * Returns bit at zero based @param position in number.
 * It does followings to get the bit at specific position.
 * 1. It does sigh-propagating right shift to specific position.
 * 2. It ANDS with 1 to get the 0th bit after shifting.
 * (since all other bits of 1 are 0 except 0th bit)
 *
 * @param {*} number
 * @param {*} position
 * @returns bit.
 */
const getBit = (number, position) => {
  if (position < 0) {
    // For negative shift count js has weird behavior.
    // https://stackoverflow.com/questions/16559921/left-shifting-with-a-negative-shift-count-in-javascript
    throw new Error(
      `getBit:position can not be negative. position: ${position}`
    );
  }
  return (number >> position) & 1;
};
module.exports = getBit;
