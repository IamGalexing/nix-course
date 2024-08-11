function run(obj) {
  if (typeof obj !== 'object' || Array.isArray(obj) || obj === null) {
    return 'support only object';
  }

  const valuesObj = Object.values(obj);

  const sumValues = valuesObj.reduce((sum, value) => (typeof value === 'number' ? sum + value : sum), 0);

  return sumValues;
}

// WARN: do not remove this line
module.exports = run;
