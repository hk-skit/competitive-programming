const heapSort = require('../../../sorting/heap-sort/heap-sort');
/**
 *
 * @param {*} array
 * @param {*} k
 */
const kLargestElements = (array, k) => {
  heapSort(array);
  return array.slice(-k);
};

module.exports = kLargestElements;
