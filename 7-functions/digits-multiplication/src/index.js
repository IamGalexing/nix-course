function run(integer) {
  const digitsMultiplication = integer
    .toString()
    .split('')
    .reduce((sum, num) => (num !== '0' ? sum * num : sum), 1);

  return digitsMultiplication;
}

// Do not remove this line!
module.exports = run;
