/**
 * Finds maximum in a binary tree.
 * @param {BinaryTreeNode} root
 */
const maximum = (root) => {
  if (!root) {
    return Number.MIN_SAFE_INTEGER;
  }

  let max = root.value;
  const lMax = maximum(root.left);
  const rMax = maximum(root.right);
  if (lMax > max) {
    max = lMax;
  }
  if (rMax > max) {
    max = rMax;
  }
  return max;
};
// TODO: Write iterative approach as well.

module.exports = maximum;
