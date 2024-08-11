function run(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    throw new Error('Not a Number');
  }
  return num1 * num2;
}

// Do not remove this line!
module.exports = run;
