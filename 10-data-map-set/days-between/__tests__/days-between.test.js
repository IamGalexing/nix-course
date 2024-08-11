const { describe, test, expect } = require('@jest/globals');
const run = require('../src');

describe('05-days-between', () => {
  test('general tests', () => {
    expect(run([1982, 4, 19], [1982, 4, 22])).toBe(3);
    expect(run([2014, 1, 1], [2014, 8, 27])).toBe(238);
    expect(run([2014, 8, 27], [2014, 1, 1])).toBe(238);
  });
});
