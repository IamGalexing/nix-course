const unique = require('../src');

describe('#unique', () => {
  it('should removes non-unique elements', () => {
    const givenArray = [27, 95, 36, 58, 17, 36, 48, 93, 95];
    expect(unique(givenArray)).toEqual([27, 95, 36, 58, 17, 48, 93]);
  });

  it('should not change the source array', () => {
    const givenArray = [27, 95, 36, 58, 17, 48, 93, 36, 95];
    unique(givenArray);
    expect(givenArray).toEqual([27, 95, 36, 58, 17, 48, 93, 36, 95]);
  });
});
