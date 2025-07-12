/*
Create a function that takes a string and returns dashes on the left and right side of every vowel (a e i o u).

Examples

dashed("Carpe Diem") ➞ "C-a-rp-e- D-i--e-m"

dashed("Fight for your right to party!") ➞ "F-i-ght f-o-r y-o--u-r r-i-ght t-o- p-a-rty!"
Notes
A string can contain uppercase and lowercase vowels.
*/

function dashed(str) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (vowels.has(str[i])) {
      result += '-' + str[i] + '-';
    } else {
      result += str[i];
    }
  }

  return result;
}

exports.solution = dashed;