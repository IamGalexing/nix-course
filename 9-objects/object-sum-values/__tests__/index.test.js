const sumObjectValues = require('../src');

describe('#sumObjectValues', () => {
  test('should return "support only object" if an argument is not an object', () => {
    expect(sumObjectValues(null)).toEqual('support only object');
    expect(sumObjectValues([])).toBe('support only object');
    expect(sumObjectValues('object')).toBe('support only object');
  });

  test('should return 0 for empty object', () => {
    expect(sumObjectValues({})).toEqual(0);
  });

  test('should return 0 if object does not have numerical values', () => {
    expect(sumObjectValues({ foo: 'boo' })).toEqual(0);
  });

  test('should sum all numerical values', () => {
    expect(sumObjectValues({ foo: 1, boo: 2, baz: 3 })).toEqual(6);
    expect(sumObjectValues({ foo: 1, boo: 2, baz: 'test' })).toEqual(3);
  });
});
