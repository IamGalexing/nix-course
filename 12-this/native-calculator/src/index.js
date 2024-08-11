/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */

class NotNumberError extends Error {
  constructor() {
    super('Not a Number');
  }
}

class DevideZeroError extends Error {
  constructor() {
    super('Cannot divide by zero');
  }
}

class AssignResultError extends Error {
  constructor() {
    super('Assign result directly');
  }
}

class Calculator {
  #currentValue = 0;

  add(value) {
    this.#checkNumber(value);
    this.#currentValue += value;
  }

  subtract(value) {
    this.#checkNumber(value);
    this.#currentValue -= value;
  }

  multiply(value) {
    this.#checkNumber(value);
    this.#currentValue *= value;
  }

  divide(value) {
    if (value === 0) throw new DevideZeroError();
    this.#checkNumber(value);
    this.#currentValue /= value;
  }

  #checkNumber(value) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      throw new NotNumberError();
    }
  }

  get currentValue() {
    return this.#currentValue;
  }

  set currentValue(_) {
    throw new AssignResultError();
  }
}

// WARN: do not remove this line
module.exports = { Calculator, NotNumberError, DevideZeroError, AssignResultError };
