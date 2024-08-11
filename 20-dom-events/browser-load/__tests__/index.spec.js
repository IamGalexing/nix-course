const { describe, test, expect } = require('@jest/globals');
require('../src/index');

describe('Browser event', () => {
  test('Change initial value when page was loaded', () => {
    const out = document.querySelector('.out');

    const event = new Event('load');
    window.dispatchEvent(event);

    expect(out.textContent).toBe('changed value');
  });
});
