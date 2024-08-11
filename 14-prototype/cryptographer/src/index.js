function Cryptographer() {
  this.alphabet = ' abcdefghijklmnopqrstuvwxyz';
}

Cryptographer.prototype.decrypt = function (encryptedPhrase, shift) {
  if (!shift || !encryptedPhrase.trim() || /^[^a-zA-Z\s]*$/.test(encryptedPhrase)) {
    return encryptedPhrase;
  }

  const decryptedPhrase = encryptedPhrase
    .split('')
    .map((char) => {
      if (/[^a-zA-Z\s]/.test(char)) return char;

      const charLowerCase = char.toLowerCase();

      const indexInAlphabet = this.alphabet.indexOf(charLowerCase);

      const decryptedChar =
        indexInAlphabet + shift < this.alphabet.length
          ? this.alphabet[indexInAlphabet + shift]
          : this.alphabet[indexInAlphabet + shift - this.alphabet.length + 1];

      return char !== charLowerCase ? decryptedChar.toUpperCase() : decryptedChar;
    })
    .join('');

  return decryptedPhrase;
};

const cryptographer = new Cryptographer();

// WARN: do not remove this line
module.exports = cryptographer;
