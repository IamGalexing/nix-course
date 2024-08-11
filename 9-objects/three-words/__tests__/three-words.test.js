const run = require('../src');

describe('three-words', () => {
  it('general tests', () => {
    expect(run('Hello World hello')).toBe(true);
    expect(run('He is 123 man')).toBe(false);
    expect(run('1 2 3 4')).toBe(false);
    expect(run('bla bla bla bla')).toBe(true);
  });
});
