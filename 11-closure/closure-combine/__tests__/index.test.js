const { combine, uppercase, trimSpaces, reverseString } = require('../src');

const TEST_STRING = '   Hello World!   ';

describe('#combine', () => {
  it('should convert string to uppercase', () => {
    const result = uppercase(TEST_STRING);
    expect(result).toBe('   HELLO WORLD!   ');
  });

  it('should trim spaces', () => {
    const result = trimSpaces(TEST_STRING);
    expect(result).toBe('Hello World!');
  });

  it('should revert string', () => {
    const result = reverseString(TEST_STRING);
    expect(result).toBe('   !dlroW olleH   ');
  });

  it('should combine uppercase, trimSpaces, reverseString functions', () => {
    const updateString = combine(uppercase, trimSpaces, reverseString);
    const result = updateString(TEST_STRING);
    expect(result).toBe('!DLROW OLLEH');
  });

  it('should combine uppercase, trimSpaces, reverseString and one more function', () => {
    const lowerCase = (str) => str.toLowerCase(str);
    const updateString = combine(uppercase, lowerCase, trimSpaces, reverseString);
    const result = updateString(TEST_STRING);
    expect(result).toBe('!dlrow olleh');
  });
});
