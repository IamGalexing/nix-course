/* eslint-disable no-undef */
const { describe, test, expect } = require('@jest/globals');
// eslint-disable-next-line no-unused-vars
const { baseMarkup } = require('../src/index');

describe('Keyboard event', () => {
  test('lowercase output', () => {
    const inputElement = document.querySelector('.input');
    expect(inputElement.textContent).toBe('');

    const lowerCaseSymbol = new KeyboardEvent('keypress', { key: 'e', code: 'KeyE', keyCode: 101 });
    inputElement.dispatchEvent(lowerCaseSymbol);

    expect(inputElement.textContent).toBe('e');

    const upperCaseSymbol = new KeyboardEvent('keypress', { key: 'F', code: 'KeyF', keyCode: 70 });
    inputElement.dispatchEvent(upperCaseSymbol);

    expect(inputElement.textContent).toBe('e');
  });
});
