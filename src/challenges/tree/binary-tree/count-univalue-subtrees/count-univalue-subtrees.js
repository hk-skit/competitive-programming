const countUniVal = (root) => {

  let count = 0;

  const helperFn = (node) => {
    if (node === null) {
      return true;
    }

    const {
      data,
      left,
      right
    } = node;

    const isLeftUni = helperFn(left);
    const isRightUni = helperFn(right);

    // If any of the subtrees is not singly, then this 
    // cannot be singly. 
    if (isLeftUni === false || isRightUni === false)
      return false;

    // If left subtree is singly and non-empty, but data 
    // doesn't match 
    if (left !== null && data !== left.data)
      return false;

    // Same for right subtree 
    if (right !== null && data !== right.data)
      return false;

    // If none of the above conditions is true, then 
    // tree rooted under root is single valued, increment 
    // count and return true. 
    count += 1;
    return true;

  };

  helperFn(root);
  return count;
};
