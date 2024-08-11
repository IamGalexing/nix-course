const { describe, test, expect } = require('@jest/globals');
require('../src/index');

describe('mouse event', () => {
  test('mouse dblclick', () => {
    const blockElement = document.querySelector('.square');

    expect(blockElement.classList[blockElement.classList.length - 1]).toBe('square');

    const event = new Event('dblclick');
    blockElement.dispatchEvent(event);

    expect(blockElement.classList[blockElement.classList.length - 1]).toBe('active');

    blockElement.dispatchEvent(event);

    expect(blockElement.classList[blockElement.classList.length - 1]).toBe('square');
  });
});
