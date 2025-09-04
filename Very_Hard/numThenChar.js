/*
Write a function that sorts array while keeping the array structure. Numbers should be first then letters both in ascending order.

Examples
numThenChar([
 [1, 2, 4, 3, "a", "b"],
 [6, "c", 5], [7, "d"],
 ["f", "e", 8]
]) ➞ [
 [1, 2, 3, 4, 5, 6],
 [7, 8, "a"],
 ["b", "c"], ["d", "e", "f"]
]

numThenChar([
 [1, 2, 4.4, "f", "a", "b"],
 [0], [0.5, "d","X",3,"s"],
 ["f", "e", 8],
 ["p","Y","Z"],
 [12,18]
]) ➞ [
 [0, 0.5, 1, 2, 3, 4.4],
 [8],
 [12, 18, "X", "Y", "Z"],
 ["a", "b", "d"],
 ["e", "f", "f"],
 ["p", "s"]
]
Notes
Test cases will containg integer and float numbers and single letters.
*/

function numThenChar(arr) {
  const flat = arr.flat();

  const numbers = flat
    .filter((x) => typeof x === "number")
    .sort((a, b) => a - b);
  const letters = flat.filter((x) => typeof x === "string").sort();

  const sorted = [...numbers, ...letters];

  const result = [];
  let i = 0;

  for (const sub of arr) {
    const temp = [];
    for (let j = 0; j < sub.length; j++) {
      temp.push(sorted[i++]);
    }
    result.push(temp);
  }

  return result;
}

exports.solution = numThenChar;
