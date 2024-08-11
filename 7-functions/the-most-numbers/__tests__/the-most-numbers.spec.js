const run = require('../src');

describe('14-the-most-numbers', () => {
  it('general tests', () => {
    expect(run(1, 2, 3)).toBe(2);
    expect(run(5, -5)).toBe(10);
    expect(run(10.2, -2.2, 0, 1.1, 0.5)).toBe(12.4);
    expect(run()).toBe(0);
  });
});
