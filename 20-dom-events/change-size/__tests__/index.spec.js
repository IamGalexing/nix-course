/* eslint-disable no-undef */
const { describe, test, expect } = require('@jest/globals');
require('../src/index');

describe('Keyboard event', () => {
  test('change size function', () => {
    const inputElement = document.querySelector('.input');
    const widthOutput = document.querySelector('.width-output');
    const heightOutput = document.querySelector('.height-output');

    expect(widthOutput.textContent).toBe('width: 85');
    expect(heightOutput.textContent).toBe('height: 85');

    const arrowDownEvent = new KeyboardEvent('keydown', { key: 'ArrowDown', code: 'ArrowDown', keyCode: 40 });
    inputElement.dispatchEvent(arrowDownEvent);
    inputElement.dispatchEvent(arrowDownEvent);

    expect(widthOutput.textContent).toBe('width: 85');
    expect(heightOutput.textContent).toBe('height: 87');

    const arrowRightEvent = new KeyboardEvent('keydown', { key: 'ArrowRight', code: 'ArrowRight', keyCode: 39 });
    inputElement.dispatchEvent(arrowRightEvent);
    inputElement.dispatchEvent(arrowRightEvent);

    expect(widthOutput.textContent).toBe('width: 87');
    expect(heightOutput.textContent).toBe('height: 87');
  });
});
