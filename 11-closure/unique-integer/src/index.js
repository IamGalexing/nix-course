function run() {
  let numbers = [];

  function generateInteger() {
    const randomInteger = Math.ceil(Math.random() * 10);

    if (numbers.includes(randomInteger)) {
      const cloneNumbers = [...numbers];
      numbers = [];
      return cloneNumbers;
    }

    numbers.push(randomInteger);
    return randomInteger;
  }

  return generateInteger;
}

// WARN: do not remove this line
module.exports = run;
