/*
Create a function that finds all elements in the given array, such that each element is greater than all elements to the right of it.

Examples
leader([2, 3, 20, 15, 8, 3]) ➞ [20, 15, 8, 3]
// Note that, 20 is greater than all the elements to it's
// right side, similarly 15 and so on.

leader([2, 3, 20, 15, 8, 25, 3]) ➞ [25, 3]
// Note that, 20 cannot be added because 25 is present,
// which is greater than 20.

leader([1, 2, 3, 4, 5]) ➞ [5]
Notes
Add elements in the new array in the same way they occur in the input array.
*/

function leader( arr ) {
  if (!arr || arr.length === 0) return [];

  const length = arr.length;
  const result = [arr[length-1]];
  let maxSoFar = arr[length-1];

  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] >= maxSoFar) {
      result.push(arr[i]);
      maxSoFar = arr[i];
    }
  }

  return result.reverse();
}

exports.solution = leader;