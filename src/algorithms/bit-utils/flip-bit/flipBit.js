/**
 * Flips/toggle the bit at the @param position. It at first left shit 1 by zero
 * based the @param position count which results to value like 00100 and then
 * XORs with number.
 * https://codeforces.com/blog/entry/18169
 *
 * @param {*} number
 * @param {*} position
 * @returns
 */
function flipBit(number, position) {
  return number ^ (1 << position);
}
module.exports = flipBit;
