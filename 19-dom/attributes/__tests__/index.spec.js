/* eslint-disable no-undef */
const { describe, test, expect } = require('@jest/globals');
// eslint-disable-next-line no-unused-vars
const { baseMarkup } = require('../src/index');

describe('gas function', () => {
  const clickEvent = new Event('click');
  test('test A92 gas value', () => {
    const out = document.querySelector('.out');
    const input = document.querySelector('.input');
    const button = document.querySelectorAll('.gas')[0];

    input.value = 20;
    button.dispatchEvent(clickEvent);

    expect(out.innerHTML).toBe('Total price: 24');
  });

  test('test A95 gas value', () => {
    const out = document.querySelector('.out');
    const input = document.querySelector('.input');
    const button = document.querySelectorAll('.gas')[1];

    input.value = 20;
    button.dispatchEvent(clickEvent);

    expect(out.innerHTML).toBe('Total price: 30');
  });

  test('test A95 gas value', () => {
    const out = document.querySelector('.out');
    const input = document.querySelector('.input');
    const button = document.querySelectorAll('.gas')[2];

    input.value = 20;
    button.dispatchEvent(clickEvent);

    expect(out.innerHTML).toBe('Total price: 40');
  });
});
