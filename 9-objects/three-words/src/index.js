function run(str) {
  const arrWords = str.split(' ');

  const isSuccession = arrWords
    .slice(0, -2)
    .some((word, index) => !/\d/.test(word) && !/\d/.test(arrWords[index + 1]) && !/\d/.test(arrWords[index + 2]));

  return isSuccession;
}

// Do not remove this line!
module.exports = run;
