const { describe, test, expect } = require('@jest/globals');
require('../src/index');

describe('mouse event', () => {
  test('mouse - mouseenter and mouseleave', () => {
    const image = document.querySelector('.img');
    expect(image.getAttribute('src')).toBe('img/1.png');

    const mouseenter = new Event('mouseenter');
    image.dispatchEvent(mouseenter);

    expect(image.getAttribute('src')).toBe('img/2.png');

    const mouseleave = new Event('mouseleave');
    image.dispatchEvent(mouseleave);

    expect(image.getAttribute('src')).toBe('img/1.png');
  });
});
