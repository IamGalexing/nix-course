const cryptographer = require('../src');

describe('Decrypt method', () => {
  const phrases = [
    { encrypted: 'qbpq', decrypted: 'test', shift: 3 },
    { encrypted: 'Ebiil tloia!', decrypted: 'Hello world!', shift: 3 },
    { encrypted: 'EvqvNxmdko dn vrznjhz!', decrypted: 'JavaScript is awesome!', shift: 5 },
    {
      encrypted: 'Yjwsl bgt! Cwwh mh lzw yggv ogjc sfv qgm oadd kmuuwwv! Ow twdawnw af qgm!',
      decrypted: 'Great job! Keep up the good work and you will succeed! We believe in you!',
      shift: 8,
    },
  ];

  it(`should be defined`, () => {
    expect(cryptographer).toBeTruthy();
  });

  it(`should return a string`, () => {
    const decrypted = cryptographer.decrypt('', 0);

    expect(typeof decrypted).toBe('string');
  });

  it('should return the same letter when shift is 0', () => {
    const decrypted = cryptographer.decrypt('a', 0);

    expect(decrypted).toBe('a');
  });

  it('should return a letter depending on the passed letter and shift. CASE: One letter', () => {
    const decrypted = cryptographer.decrypt('a', 1);

    expect(decrypted).toBe('b');
  });

  it('should return a letter depending on the passed letter and shift. CASE: Several letters', () => {
    const decrypted = cryptographer.decrypt('abc', 3);

    expect(decrypted).toBe('def');
  });

  it(`should return a letter depending on the passed letter and shift.
      CASE: shifted index more than alphabet length. One letter`, () => {
    const decrypted = cryptographer.decrypt('z', 1);

    expect(decrypted).toBe('a');
  });

  it(`should return a letter depending on the passed letter and shift.
      CASE: shifted index more than alphabet length. Several letters`, () => {
    const decrypted = cryptographer.decrypt('wxy', 3);

    expect(decrypted).toBe('zab');
  });

  it('should work correctly with non-literal values and return the same characters', () => {
    const decrypted = cryptographer.decrypt('.!?', 3);

    expect(decrypted).toBe('.!?');
  });

  it('should work correctly with spaces', () => {
    const decrypted = cryptographer.decrypt('   ', 3);

    expect(decrypted).toBe('   ');
  });

  phrases.forEach(({ encrypted, decrypted, shift }) => {
    it(`should work with phrase: \n ${encrypted} \n DECRYPTED AS: \n ${decrypted}`, () => {
      const decrypted = cryptographer.decrypt(encrypted, shift);

      expect(decrypted).toBe(decrypted);
    });
  });
});
