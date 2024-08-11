function run(arr) {
  // Shortest solution
  // const unigueElements = [...new Set(arr)];

  const unigueElements = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (!unigueElements.includes(arr[i])) {
      unigueElements.push(arr[i]);
    }
  }

  return unigueElements;
}

// WARN: do not remove this line
module.exports = run;
