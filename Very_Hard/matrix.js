/*
Write a function that accepts an integer N and returns an N * N spiral matrix.

Examples
matrix(2) ➞ [
  [1, 2],
  [4, 3]
]

matrix(3) ➞ [
  [1, 2, 3],
  [8  ,9, 4],
  [7, 6, 5]
]

matrix(4) ➞ [
  [1,   2,  3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10,  9,  8, 7]
]
*/

function matrix(N) {
  // // first solution: using boundaries (top, bottom, left, right)
  // const res = [...Array(N)].map(() => Array(N).fill(0));

  // let top = 0, bottom = N - 1;
  // let left = 0, right = N - 1;
  // let num = 1;

  // while (left <= right && top <= bottom) {
  //   // left -> right
  //   for (let col = left; col <= right; col++) {
  //     res[top][col] = num++;
  //   }
  //   top++;

  //   // top -> buttom
  //   for (let row = top; row <= bottom; row++) {
  //     res[row][right] = num++;
  //   }
  //   right--;

  //   if (top <= bottom) {
  //     // right -> left
  //     for (let col = right; col >= left; col--) {
  //       res[bottom][col] = num++;
  //     }
  //     bottom--;
  //   }

  //   if (left <= right) {
  //     // button to up
  //     for (let row = bottom; row >= top; row--) {
  //       res[row][left] = num++;
  //     }
  //     left++;
  //   }
  // }

  // return res;

  // second solution: using direction vecotrs
  const res = [...Array(N)].map(() => Array(N).fill(0));

  const directions = [
    [0, 1],   // right
    [1, 0],   // down
    [0, -1],  // left
    [-1, 0]   // up
  ];

  let dir = 0;       // initial direction, right
  let row = 0, col = 0;
  for (let num = 1; num <= N * N; num++) {
    res[row][col] = num;

    // calculate next move
    const [dr, dc] = directions[dir];
    let nextRow = row + dr;
    let nextCol = col + dc;

    // if stepping over matrix limits or getting to visited cell, change direction
    if (
      nextRow < 0 || nextRow >= N ||
      nextCol < 0 || nextCol >= N ||
      res[nextRow][nextCol] !== 0
    ) {
      dir = (dir + 1) % 4;  // change direction
      const [ndr, ndc] = directions[dir];
      nextRow = row + ndr;
      nextCol = col + ndc;
    }

    row = nextRow;
    col = nextCol;
  }

  return res;
}

exports.solution = matrix;