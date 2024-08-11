class Person {
  constructor(name, yearOfBirth) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
  }

  describe() {
    const currentYear = new Date().getFullYear();
    return `${this.name}, ${currentYear - this.yearOfBirth} years old.`;
  }
}

// WARN: do not remove this line
module.exports = Person;
