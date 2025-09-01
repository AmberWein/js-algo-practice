/*
A wristband can have 4 patterns:

horizontal: each item in a row is identical.
vertical: each item in a column is identical.
diagonal left: each item is identical to the one on it's upper left or bottom right.
diagonal right: each item is identical to the one on it's upper right or bottom left.
You are shown an incomplete section of a wristband.

Write a function that returns true if the section can be correctly classified into one of the 4 types, and false otherwise.

Examples
isWristband([
 ["A", "A"],
 ["B", "B"],
 ["C", "C"]
]) ➞ true 
// Part of horizontal wristband.

isWristband([
 ["A", "B"],
 ["A", "B"],
 ["A", "B"]
]) ➞ true 
// Part of vertical wristband.

isWristband([
 ["A", "B", "C"],
 ["C", "A", "B"],
 ["B", "C", "A"],
 ["A", "B", "C"]
]) ➞ true
// Part of diagonal left wristband.

isWristband([
 ["A", "B", "C"],
 ["B", "C", "A"],
 ["C", "A", "B"],
 ["A", "B", "A"]
]) ➞ true
// Part of diagonal right wristband.
*/

function isWristband( matrix ) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  function isPattern(dx, dy) {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const ni = i + dx, nj = j + dy;
        if ( ni >= 0 && ni < rows && nj >= 0 && nj < cols) {
          if (matrix[i][j] != matrix[ni][nj]) return false;
        }
      }
    }
    return true;
  }

  return (
    isPattern(0, 1) ||  // horizontal
    isPattern(1, 0) ||  // vertical
    isPattern(1, 1) ||  // diagonal left (\)
    isPattern(1, -1)    // diagonal right (/)
  )
}

exports.solution = isWristband;