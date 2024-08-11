/* eslint max-classes-per-file: 0 */
/* eslint class-methods-use-this: 0 */

class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}

class BankAccount {
  #isOpen = false;

  #balance = 0;

  open() {
    if (this.#isOpen) throw new ValueError();
    this.#isOpen = true;
  }

  close() {
    if (!this.#isOpen) throw new ValueError();
    this.#balance = 0;
    this.#isOpen = false;
  }

  deposit(value) {
    if (!this.#isOpen || value < 0) throw new ValueError();
    this.#balance += value;
  }

  withdraw(value) {
    if (!this.#isOpen || value < 0 || this.#balance < value) {
      throw new ValueError();
    }
    this.#balance -= value;
  }

  get balance() {
    if (!this.#isOpen) throw new ValueError();
    return this.#balance;
  }

  set balance(_) {
    throw new ValueError();
  }
}

module.exports = {
  BankAccount,
  ValueError,
};
