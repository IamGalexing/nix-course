const createObject = require('../src');

describe('#createObject', () => {
  test('should create user', () => {
    const func = createObject.toString();
    expect(func.includes('user = {}')).toBe(true);
  });

  test('should return correct user object', () => {
    const result = createObject();
    expect(result).toEqual({ name: 'Jane', surname: 'Doe' });
  });
});
