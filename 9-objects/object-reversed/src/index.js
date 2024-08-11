function run(obj) {
  if (typeof obj !== 'object' || Array.isArray(obj) || obj === null) {
    return 'support only object';
  }

  const entriesObj = Object.entries(obj);
  const reversedObj = {};

  entriesObj.forEach(([key, value]) => {
    reversedObj[value] = key;
  });

  return reversedObj;
}

// WARN: do not remove this line
module.exports = run;
