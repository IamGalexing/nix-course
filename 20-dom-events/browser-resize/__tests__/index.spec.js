const { describe, test, expect } = require('@jest/globals');
require('../src/index');

describe('Browser event', () => {
  test('Change value when change window size', () => {
    const out = document.querySelector('.out');

    expect(out.textContent).toBe('0');

    const event = new Event('resize');
    window.dispatchEvent(event);
    window.dispatchEvent(event);
    window.dispatchEvent(event);

    expect(out.textContent).toBe('3');
  });
});
