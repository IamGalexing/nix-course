function uppercase(string) {
  return string.toUpperCase();
}

function trimSpaces(string) {
  return string.trim();
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

function combine(...functions) {
  return (string) => functions.reduce((str, fn) => fn(str), string);
}

// WARN: do not remove this line
module.exports = { combine, uppercase, trimSpaces, reverseString };
