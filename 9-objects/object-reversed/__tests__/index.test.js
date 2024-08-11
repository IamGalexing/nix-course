const objectReverse = require('../src');

describe('#objectReverse', () => {
  test('should do nothing with empty object', () => {
    expect(objectReverse({})).toEqual({});
  });

  test('should returns object with swapped key and value', () => {
    expect(objectReverse({ smth: 'here' })).toEqual({ here: 'smth' });
  });

  test('should return "support only object" if an argument is not an object', () => {
    expect(objectReverse(null)).toEqual('support only object');
    expect(objectReverse([])).toBe('support only object');
    expect(objectReverse('object')).toBe('support only object');
  });
});
