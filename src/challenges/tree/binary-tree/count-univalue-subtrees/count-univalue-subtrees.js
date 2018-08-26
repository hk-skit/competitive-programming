const countUnivalueSubtrees = (root) => {
  if (root === null) {
    return 0;
  }

  const { left, right, value } = root;

  if (left === null && right === null) {
    // Leaf node.
    return 1;
  }
  const leftCount = countUnivalueSubtrees(root.left);
  const rightCount = countUnivalueSubtrees(root.right);
  if (left === null) {
    if (right.value === value) {
      return rightCount + 1;
    }
    return rightCount;
  }

  if (right === null) {
    if (left.value === value) {
      return leftCount + 1;
    }
    return leftCount;
  }
  let total = rightCount + leftCount;
  return value === left.value && value === right.value ? total + 1 : total;
};

module.exports = countUnivalueSubtrees;
