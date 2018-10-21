const isPalindromePermutation = (str) => {
  const bitVector = createBitVector(str);
  return bitVector === 0 || hasOnlyOneSetBit(bitVector);
};

const createBitVector = (str) => {
  let bitVector = 0;
  for (const char of str) {
    const charCode = char.charCodeAt(0);
    bitVector = flip(bitVector, charCode);
  }
  return bitVector;
};

const flip = (bitVector, n) => {
  return bitVector ^ (1 << n);
};

const hasOnlyOneSetBit = (bitVector) => {
  return (bitVector & (bitVector - 1)) === 0;
};

module.exports = isPalindromePermutation;
