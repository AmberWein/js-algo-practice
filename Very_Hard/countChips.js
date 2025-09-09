/*
Write a chip counter for a battleship board. This function should return
the number of chips (ships) present on the 2-D array.

A chip is a segment of contiguous 1s, placed either horizontally or vertically.
Chips cannot touch each other, not even diagonally. Chips can be 1x1 in size.

Examples

countChips([
  [1,1,0,0,0,0,0,0],
  [0,0,0,0,1,0,0,0],
  [0,0,0,0,1,0,1,1],
  [0,1,0,0,0,0,0,0],
  [0,1,0,0,0,0,0,0],
  [0,0,0,1,1,1,0,0],
  [0,0,0,0,0,0,0,1],
  [0,0,0,0,0,0,0,1]
]) ➞ 6

countChips([
  [1,0,1,0],
  [0,1,0,1],
  [1,0,1,0],
  [0,1,0,1]
]) ➞ 8
*/

function countChips(board) {
  const rows = board.length;
  const cols = board[0].length;
  let count = 0;

  function dfs(r, c) {
    if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] === 0) {
      return;
    }

    board[r][c] = 0;

    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] === 1) {
        count++;
        dfs(r, c);
      }
    }
  }

  return count;
}

exports.solution = countChips;