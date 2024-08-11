const { describe, it, expect } = require('@jest/globals');
const run = require('../src/index');

describe('07-tic-tac-toe-referee', () => {
  it('general tests', () => {
    expect(run(['X.O', 'XX.', 'XOO'])).toBe('X');
    expect(run(['OO.', 'XOX', 'XOX'])).toBe('O');
    expect(run(['OOX', 'XXO', 'OXX'])).toBe('D');
  });
});
