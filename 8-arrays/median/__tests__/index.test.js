const { describe, it, expect } = require('@jest/globals');
const run = require('../src/index');

describe('02-median', () => {
  it('general tests', () => {
    expect(run([1, 2, 3, 4, 5])).toBe(3);
    expect(run([3, 1, 2, 5, 3])).toBe(3);
    expect(run([1, 300, 2, 200, 1])).toBe(2);
    expect(run([3, 6, 20, 99, 10, 15])).toBe(12.5);
  });
});
