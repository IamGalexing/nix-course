/* eslint-disable no-undef */
const { describe, test, expect } = require('@jest/globals');
// eslint-disable-next-line no-unused-vars
const { baseMarkup } = require('../src/index');

describe('Keyboard event', () => {
  test('uppercase output', () => {
    const inputElement = document.querySelector('.input');
    const outElement = document.querySelector('.out');

    expect(outElement.textContent).toBe('');

    const event = new KeyboardEvent('keypress', { key: 's', code: 'KeyS' });

    inputElement.dispatchEvent(event);
    inputElement.dispatchEvent(event);

    expect(outElement.textContent).toBe('SS');
  });
});
