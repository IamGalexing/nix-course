function run(obj) {
  if (typeof obj !== 'object' || Array.isArray(obj) || obj === null) {
    return 'support only object';
  }

  const isEmptyObj = Object.keys(obj).length === 0;

  return isEmptyObj;
}

// WARN: do not remove this line
module.exports = run;
