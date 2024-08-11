const IsValid = require('../src');

describe('isValid', () => {
  it('should throw an error if string is absent', () => {
    expect(() => {
      new IsValid('').required();
    }).toThrowError('Required!');
  });

  it('should throw an error if string is empty', () => {
    expect(() => {
      new IsValid(' ').required();
    }).toThrowError('Required!');
  });

  it('should throw an error if it is not a string', () => {
    expect(() => {
      new IsValid(55).isString();
    }).toThrowError('Should be a string!');
  });

  it('should throw an error if string length less than min', () => {
    expect(() => {
      new IsValid('Test').min(5);
    }).toThrowError('Should be more than min');
  });

  it('should be possible to chain functions and throw an error if string length less than min', () => {
    expect(() => {
      new IsValid('Test').required().isString().min(5);
    }).toThrowError('Should be more than min');
  });

  it('should be possible to chain functions', () => {
    expect(new IsValid('Test string').required().isString().min(5)).toBeTruthy();

    expect(new IsValid('Test string').isString().min(5)).toBeTruthy();
  });
});
