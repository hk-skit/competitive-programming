/**
 * Finds minimum in a binary tree.
 * @param {BinaryTreeNode} root
 */
const minimum = (root) => {
  if (!root) {
    return Number.MAX_SAFE_INTEGER;
  }

  let min = root.value;
  const lMin = minimum(root.left);
  const rMin = minimum(root.right);
  if (lMin < min) {
    min = lMin;
  }
  if (rMin < min) {
    min = rMin;
  }
  return min;
};
// TODO: Write iterative approach as well.

module.exports = minimum;
