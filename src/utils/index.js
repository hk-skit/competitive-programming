const compare = (a, b) => {
  if (a === b) {
    return 0;
  }
  return a < b ? -1 : 1;
};
const Random = require('./random');
module.exports = {
  Random,
  compare
};
