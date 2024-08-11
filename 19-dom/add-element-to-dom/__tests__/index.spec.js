/* eslint-disable no-undef */
const { describe, test, expect } = require('@jest/globals');
// eslint-disable-next-line no-unused-vars
const { baseMarkup } = require('../src/index');

describe('DOM element manipulation', () => {
  const click = new Event('click');

  test('Change markup', () => {
    const button = document.querySelector('.btn');

    expect(document.querySelectorAll('.block').length).toBe(1);

    button.dispatchEvent(click);

    expect(document.querySelectorAll('.block').length).toBe(5);
    expect(document.querySelectorAll('.block')[0].textContent).toBe('before');
    expect(document.querySelectorAll('.block')[1].textContent).toBe('prepend');
    expect(document.querySelectorAll('.block')[2].textContent).toBe('Middle');
    expect(document.querySelectorAll('.block')[3].textContent).toBe('append');
    expect(document.querySelectorAll('.block')[4].textContent).toBe('after');
  });
});
