function IsValid(input) {
  return {
    required() {
      if (!input || input.trim() === '') {
        throw new Error('Required!');
      }
      return this;
    },

    isString() {
      if (typeof input !== 'string') {
        throw new Error('Should be a string!');
      }
      return this;
    },

    min(length) {
      if (input.length < length) {
        throw new Error('Should be more than min');
      }
      return this;
    },
  };
}

module.exports = IsValid;
