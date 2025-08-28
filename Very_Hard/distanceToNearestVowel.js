/*
WWrite a function that takes in a string and for each character, returns the distance to the nearest vowel. If the character is a vowel itself, return 0.

Examples
distanceToNearestVowel("aaaaa") ➞ [0, 0, 0, 0, 0]

distanceToNearestVowel("babbb") ➞ [1, 0, 1, 2, 3]

distanceToNearestVowel("abcdabcd") ➞ [0, 1, 2, 1, 0, 1, 2, 3]

distanceToNearestVowel("shopper") ➞ [2, 1, 0, 1, 1, 0, 1]
Notes
All input strings will contain at least one vowel.
Strings will be lowercased.
Vowels are: a, e, i, o, u.
*/

function distanceToNearestVowel(str) {
  const vowels = new Set(["a","e","i","o","u"]);
  const n = str.length;
  const result = new Array(n).fill(Infinity);

  // Left to right
  let lastVowel = -Infinity;
  for (let i = 0; i < n; i++) {
    if (vowels.has(str[i])) lastVowel = i;
    result[i] = i - lastVowel;
  }

  // Right to left
  lastVowel = Infinity;
  for (let i = n - 1; i >= 0; i--) {
    if (vowels.has(str[i])) lastVowel = i;
    result[i] = Math.min(result[i], lastVowel - i);
  }

  return result;
}

exports.solution = distanceToNearestVowel;
