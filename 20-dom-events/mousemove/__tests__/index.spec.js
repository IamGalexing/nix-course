const { describe, test, expect } = require('@jest/globals');
require('../src/index');

describe('mouse event', () => {
  test('mousemove', () => {
    const blockElement = document.querySelector('.square');

    expect(blockElement.textContent).toBe('1');

    const mousemove = new Event('mousemove');
    blockElement.dispatchEvent(mousemove);
    blockElement.dispatchEvent(mousemove);
    blockElement.dispatchEvent(mousemove);
    blockElement.dispatchEvent(mousemove);

    expect(+blockElement.textContent).toBe(5);
  });
});
