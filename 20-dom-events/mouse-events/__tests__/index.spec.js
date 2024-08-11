const { describe, test, expect } = require('@jest/globals');
require('../src/index');

describe('mouse event', () => {
  test('mouse click', () => {
    const blockElement = document.querySelector('.square');
    const outElement = document.querySelector('.out');
    const event = new Event('click');

    expect(outElement.textContent).toBe('');

    blockElement.dispatchEvent(event);
    expect(outElement.textContent).toBe('80');

    blockElement.dispatchEvent(event);
    expect(outElement.textContent).toBe('85');

    blockElement.dispatchEvent(event);
    expect(outElement.textContent).toBe('90');

    blockElement.dispatchEvent(event);
    expect(outElement.textContent).toBe('95');
  });
});
