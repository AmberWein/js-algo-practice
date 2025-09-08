/*
Write a sudoku validator. This function should return true if the 2-D array represents a valid sudoku and false otherwise. To be a valid sudoku:

Each row must have the digits from 1 to 9 exactly once.
Each column must have the digits from 1 to 9 exactly once.
Each 3x3 box must have the digits from 1 to 9 exactly once.
Examples
sudokuValidator([
 [1, 5, 2, 4, 8, 9, 3, 7, 6],
 [7, 3, 9, 2, 5, 6, 8, 4, 1],
 [4, 6, 8, 3, 7, 1, 2, 9, 5],
 [3, 8, 7, 1, 2, 4, 6, 5, 9],
 [5, 9, 1, 7, 6, 3, 4, 2, 8],
 [2, 4, 6, 8, 9, 5, 7, 1, 3],
 [9, 1, 4, 6, 3, 7, 5, 8, 2],
 [6, 2, 5, 9, 4, 8, 1, 3, 7],
 [8, 7, 3, 5, 1, 2, 9, 6, 4]
]) ➞ true

sudokuValidator([
 [1, 1, 2, 4, 8, 9, 3, 7, 6],
 [7, 3, 9, 2, 5, 6, 8, 4, 1],
 [4, 6, 8, 3, 7, 1, 2, 9, 5],
 [3, 8, 7, 1, 2, 4, 6, 5, 9],
 [5, 9, 1, 7, 6, 3, 4, 2, 8],
 [2, 4, 6, 8, 9, 5, 7, 1, 3],
 [9, 1, 4, 6, 3, 7, 5, 8, 2],
 [6, 2, 5, 9, 4, 8, 1, 3, 7],
 [8, 7, 3, 5, 1, 2, 9, 6, 4]
]) ➞ false
*/

function sudokuValidator(board) {
  function isValidGroup(group) {
    const set = new Set(group);
    return set.size === 9 && [...set].every((n) => n >= 1 && n <= 9);
  }

  // check rows
  for (let row of board) {
    if (!isValidGroup(row)) return false;
  }

  // check columns
  for (let col = 0; col < 9; col++) {
    const column = board.map((row) => row[col]);
    if (!isValidGroup(column)) return false;
  }

  // check 3x3 boxes
  for (let r = 0; r < 9; r += 3) {
    for (let c = 0; c < 9; c += 3) {
      const box = [];
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          box.push(board[r + i][c + j]);
        }
      }
      if (!isValidGroup(box)) return false;
    }
  }

  return true;
}

exports.solution = sudokuValidator;
