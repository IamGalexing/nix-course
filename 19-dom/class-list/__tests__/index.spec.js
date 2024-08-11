/* eslint-disable no-undef */
const { describe, test, expect } = require('@jest/globals');
// eslint-disable-next-line no-unused-vars
const { baseMarkup } = require('../src/index');

describe('classes', () => {
  const allDiv = document.querySelectorAll('.out');
  const eventClick = new Event('click');
  const className = 'active';

  test('custom toggle', () => {
    const button = document.querySelector('.btn');

    allDiv.forEach((item) => {
      expect(item.className).not.toContain(className);
    });

    button.dispatchEvent(eventClick);

    allDiv.forEach((item) => {
      expect(item.className).toContain(className);
    });

    button.dispatchEvent(eventClick);

    allDiv.forEach((item) => {
      expect(item.className).not.toContain(className);
    });
  });
});
