/**
 * Max heapify a subtree rooted with node at @param index in @param array.
 *
 * @param {*} array array representing a binary heap.
 * @param {*} size size of the heap
 * @param {*} index
 */
const maxHeapify = (array, size, index) => {
  let largest = index; // root element as largest.

  const left = 2 * index + 1; // left child index
  const right = 2 * index + 2; // right child index

  if (left < size && array[left] > array[largest]) {
    largest = left;
  }
  if (right < size && array[right] > array[largest]) {
    largest = right;
  }

  if (largest !== index) {
    // Swapping using es6.
    [array[index], array[largest]] = [array[largest], array[index]];
    // Recursively call heapify for child.
    maxHeapify(array, size, largest);
  }
};

/**
 * Applies heap sort to supplied @param array.
 * https://www.geeksforgeeks.org/heap-sort/
 * @param {*} array
 */
const heapSort = (array) => {
  const size = array.length;
  // Calling heapify on roots. In an array of n elements, the last root will be
  // n/2 -1. The leaf of this root will be the last element of array, that is
  // 2i + 1 = 2( n/2 -1) + 1 = n - 1
  for (let index = Math.floor(size / 2) - 1; index >= 0; index -= 1) {
    maxHeapify(array, size, index);
  }

  // Let extract element from heap.
  // We'll extract root element.
  for (let index = size - 1; index >= 0; index -= 1) {
    // swapping using ES6.
    [array[index], array[0]] = [array[0], array[index]];
    maxHeapify(array, index, 0);
  }
};

module.exports = heapSort;
