const { describe, test, expect } = require('@jest/globals');
const run = require('../src/index');

describe('06-unlucky-days', () => {
  test('general tests', () => {
    expect(run(2015)).toBe(3);
    expect(run(1986)).toBe(1);
  });
});
