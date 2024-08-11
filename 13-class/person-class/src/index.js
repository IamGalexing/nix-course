class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getAge() {
    const currentDate = new Date();
    let age = currentDate.getFullYear() - this.dateOfBirth.getFullYear();

    if (currentDate < new Date(currentDate.getFullYear(), this.dateOfBirth.getMonth(), this.dateOfBirth.getDate())) {
      age -= 1;
    }

    return age;
  }

  getInfo() {
    return `My name is ${this.getFullName()}. I'm ${this.getAge()} years old.`;
  }
}

// WARN: do not remove this line
module.exports = Person;
