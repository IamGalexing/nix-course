function run(num) {
  const stringNum = num.toString();
  const reversedStringNum = stringNum.split('').reverse().join('');

  const isPalindrome = stringNum === reversedStringNum;

  return isPalindrome;
}

// WARN: do not remove this line
module.exports = run;
