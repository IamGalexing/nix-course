const run = require('../src');

describe('11-secret-message', () => {
  it('general tests', () => {
    expect(run('How are you? Eh, ok. Low or Lower?  Ohhh.')).toBe('HELLO');
    expect(run('hello world!')).toBe('');
    expect(run('HELLO WORLD!!!')).toBe('HELLOWORLD');
  });
});
