/*
Write a function that returns true if you can partition an array into one element and the rest, such that this element is equal to the product of all other elements excluding itself.

Examples
canPartition([2, 8, 4, 1]) ➞ true
// 8 = 2 x 4 x 1

canPartition([-1, -10, 1, -2, 20]) ➞ false

canPartition([-1, -20, 5, -1, -2, 2]) ➞ true
Notes
The array may contain duplicates.
Multiple solutions can exist, any solution is sufficient to return true.
*/

function canPartition(arr) {
  const zeroCount = arr.filter(x => x === 0).length;

  // multiple zeros
  if (zeroCount > 1) return true;
  if (zeroCount === 1) {
    // only works if totalProduct (excluding 0) is 0
    const product = arr.reduce((prod, x) => x === 0 ? prod : prod * x, 1);
    return product === 0;
  }

  // no zeros
  const totalProduct = arr.reduce((prod, x) => prod * x, 1);

  return arr.some(x => x !== 0 && totalProduct / x === x);
}

exports.solution = canPartition;