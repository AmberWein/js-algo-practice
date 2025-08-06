/*
Create a function that returns the area of the overlap between two rectangles. The function will receive two rectangles, each with the coordinates of two of its opposite angles.

Examples
overlappingRectangles(
  [{ x: 2, y: 1 }, { x: 5, y: 5 }],
  [{ x: 3, y: 2 }, { x: 5, y: 7 }]
) ➞ 6

overlappingRectangles(
  [{ x: 2, y: -9 }, { x: 13, y: -4 }],
  [{ x: 5, y: -11 }, { x: 7, y: -2 }]
) ➞ 10

overlappingRectangles(
  [{ x: -8, y: -7 }, { x: -4, y: 0 }],
  [{ x: -5, y: -9 }, { x: -1, y: -2 }]
) ➞ 5

Notes
Coordinates can be positive or negative integers.
*/

function overlappingRectangles( rect1, rect2 ) {
    // finds boundaries
    // first rectangle
    const x1Min = Math.min(rect1[0].x, rect1[1].x);
    const x1Max = Math.max(rect1[0].x, rect1[1].x);
    const y1Min = Math.min(rect1[0].y, rect1[1].y);
    const y1Max = Math.max(rect1[0].y, rect1[1].y);
    
    // second rectangle
    const x2Min = Math.min(rect2[0].x, rect2[1].x);
    const x2Max = Math.max(rect2[0].x, rect2[1].x);
    const y2Min = Math.min(rect2[0].y, rect2[1].y);
    const y2Max = Math.max(rect2[0].y, rect2[1].y);
    
    // calculates the overlap
    // on the x-axis
    const overlapWidth = Math.max(0, Math.min(x1Max, x2Max) - Math.max(x1Min, x2Min));
    
    // on the y-axis
    const overlapHeight = Math.max(0, Math.min(y1Max, y2Max) - Math.max(y1Min, y2Min));
    
    return overlapWidth * overlapHeight;
}

exports.solution = overlappingRectangles;