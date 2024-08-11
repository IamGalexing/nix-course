function run(...args) {
  if (!args.length) return 0;

  const maxNumber = Math.max(...args);
  const minNumber = Math.min(...args);

  const difference = Math.abs(maxNumber - minNumber);

  // round the difference to +-0.001
  const roundDifference = (difference.toFixed(3) * 1000) / 1000;

  return roundDifference;
}

// Do not remove this line!
module.exports = run;
