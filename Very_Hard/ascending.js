/*
Write a function that returns true if a string consists of ascending or ascending AND consecutive numbers.

Examples
ascending("232425") ➞ true
// Consecutive numbers 23, 24, 25

ascending("2324256") ➞ false
// No matter how this string is divided, the numbers are not consecutive.

ascending("444445") ➞ true
// Consecutive numbers 444 and 445.
Notes
A number can consist of any number of digits, so long as the numbers are adjacent to each other, and the string has at least two of them.
*/

function ascending(str) {
  const n = str.length;

  // try all possible lengths
  for (let len = 1; len <= n / 2; len++) {
    let nums = [];
    let i = 0;

    while (i < n) {
      nums.push(Number(str.slice(i, i + len)));
      i += len;
    }

    // check if they are consecutive
    let isConsecutive = true;
    for (let j = 1; j < nums.length; j++) {
      if (nums[j] !== nums[j - 1] + 1) {
        isConsecutive = false;
        break;
      }
    }

    if (isConsecutive) return true;
  }
  

  return false;
}

exports.solution = ascending;
