const formatDate = require('../src');

describe('#formatDate', () => {
  test('should format date', () => {
    expect(formatDate('12/11/2022')).toBe('11-12-2022');
    expect(formatDate('02/11/2022')).toBe('11-02-2022');
    expect(formatDate('12/01/2022')).toBe('01-12-2022');
  });
});
