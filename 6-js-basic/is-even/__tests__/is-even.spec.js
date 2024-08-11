const run = require('../src/is-even');

describe('elementary-02', () => {
  it('general tests', () => {
    expect(run(0)).toBe(true);
    expect(run(1)).toBe(false);
    expect(run(2)).toBe(true);
    expect(run(3)).toBe(false);
    expect(run(-1)).toBe(false);
    expect(run(-2)).toBe(true);
    expect(run(-3)).toBe(false);
    expect(run(4.5)).toBe(false);
    expect(run(4.6)).toBe(false);
    expect(run(-6.6)).toBe(false);
  });

  it('not a number', () => {
    expect(run.bind('')).toThrow('Not a Number');
    expect(run.bind(true)).toThrow('Not a Number');
    expect(run.bind({})).toThrow('Not a Number');
    expect(run.bind([])).toThrow('Not a Number');
    expect(run.bind(null)).toThrow('Not a Number');
    expect(run.bind(undefined)).toThrow('Not a Number');
  });
});
