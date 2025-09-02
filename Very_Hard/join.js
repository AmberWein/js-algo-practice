/*
Write a function that connects each previous word to the next word by the shared letters. Return the resulting string (removing duplicate characters in the overlap) and the minimum number of shared letters across all pairs of strings.

Examples
join(["oven", "envier", "erase", "serious"]) ➞ ["ovenvieraserious", 2]

join(["move", "over", "very"]) ➞ ["movery", 3]

join(["to", "ops", "psy", "syllable"]) ➞ ["topsyllable", 1]

// "to" and "ops" share "o" (1)
// "ops" and "psy" share "ps" (2)
// "psy" and "syllable" share "sy" (2)
// the minimum overlap is 1

join(["aaa", "bbb", "ccc", "ddd"]) ➞ ["aaabbbcccddd", 0]
Notes
More specifically, look at the overlap between the previous words ending letters and the next word's beginning letters.
*/

function join(words) {
  if (words.length === 0) return ["", 0];

  let result = words[0];
  let minOverlap = Infinity;

  for (let k = 0; k < words.length - 1; k++) {
    const first = words[k];
    const second = words[k + 1];
    let overlap = 0;

    let j = 1; // start with 1 character overlap
    while (j <= first.length && j <= second.length) {
      let match = true;
      for (let x = 0; x < j; x++) {
        if (first[first.length - j + x] !== second[x]) {
          match = false;
          break;
        }
      }
      if (match) overlap = j; // update maximum overlap
      j++;
    }

    minOverlap = Math.min(minOverlap, overlap);
    result += second.slice(overlap);
  }

  if (minOverlap === Infinity) minOverlap = 0;

  return [result, minOverlap];
}

exports.solution = join;