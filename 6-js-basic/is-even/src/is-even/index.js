function run(num) {
  if (typeof num !== 'number') {
    throw new Error('Not a Number');
  }
  return num % 2 === 0;
}

// Do not remove this line!
module.exports = run;
