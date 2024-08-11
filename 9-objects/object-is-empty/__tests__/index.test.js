const isEmpty = require('../src');

describe('#isEmpty', () => {
  test('should returns true for an empty object', () => {
    const result = isEmpty({});
    expect(result).toBe(true);
  });

  test('should returns false if a property exists', () => {
    const result = isEmpty({ smth: 'here' });
    expect(result).toBe(false);
  });

  test('should return "support only object" if an argument is not an object', () => {
    expect(isEmpty(null)).toEqual('support only object');
    expect(isEmpty([])).toBe('support only object');
    expect(isEmpty('object')).toBe('support only object');
  });
});
