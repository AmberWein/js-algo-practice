/*
Create a function that converts Celcius to Fahrenheit and vice versa.

Examples
convert("35°C") ➞ "95°F"

convert("19°F") ➞ "-7°C"

convert("33") ➞ "Error"
Notes
Round to the nearest integer.
If the input is incorrect, return "Error".
*/

function convertTemp( string ) {
  if (string.endsWith("°C")) {
    const num = parseFloat(string.slice(0, -2));
    if (isNaN(num)) return "Error";
    const fahrenheit = Math.round(num * 9 / 5 + 32);
    return `${fahrenheit}°F`;
  } else if (string.endsWith("°F")) {
    const num = parseFloat(string.slice(0, -2));
    if (isNaN(num)) return "Error";
    const celsius = Math.round((num - 32) * 5 / 9);
    return `${celsius}°C`;
  } else {
    return "Error";
  }
}

exports.solution = convertTemp;