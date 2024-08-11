const run = require('../src');

describe('digits-multiplication', () => {
  it('general tests', () => {
    expect(run(123405)).toBe(120);
    expect(run(999)).toBe(729);
    expect(run(1000)).toBe(1);
    expect(run(1111)).toBe(1);
  });
});
