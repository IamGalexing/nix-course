const run = require('../src');

describe('run method', () => {
  it('should return a number', () => {
    expect(typeof run()).toBe('number');
  });

  it('should not return NaN', () => {
    expect(Number.isNaN(run())).toBeFalsy();
  });

  it('should return correct value', () => {
    expect(run()).toBe(26);
  });
});
