const run = require('../src/13-absolute-sorting');

describe('13-absolute-sorting', () => {
  it('general tests', () => {
    expect(run([-20, -5, 10, 15])).toEqual([-5, 10, 15, -20]);
    expect(run([1, 2, 3, 0])).toEqual([0, 1, 2, 3]);
    expect(run([-1, -2, -3, 0])).toEqual([0, -1, -2, -3]);
  });
});
