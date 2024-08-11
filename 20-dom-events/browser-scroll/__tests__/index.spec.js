/* eslint-disable no-undef */
const { describe, test, expect } = require('@jest/globals');
require('../src/index');

describe('Browser event', () => {
  test('Increase input value when scroll mouse', () => {
    const out = document.querySelector('.out');

    const event = new Event('scroll');
    window.dispatchEvent(event);
    window.dispatchEvent(event);

    expect(out.textContent).toBe('3');
  });
});
