const isPalindrome = require('../src');

describe('#isPalindrome', () => {
  test('should returns true for palindrome', () => {
    expect(isPalindrome(123321)).toBe(true);
  });

  test("should returns false if it's not a palindrome", () => {
    expect(isPalindrome(123)).toBe(false);
  });
});
