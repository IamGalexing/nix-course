const Person = require('../src');

describe('#person', () => {
  const name = 'Alex';
  const yearOfBirth = 1992;
  const currentYear = new Date().getFullYear();
  const Alex = new Person(name, yearOfBirth);

  it('The person should have a given name', () => {
    expect(Alex.name).toBe(name);
  });

  it('The person should have a given date of birth', () => {
    expect(Alex.yearOfBirth).toBe(yearOfBirth);
  });

  it('The person should return a correct description', () => {
    expect(Alex.describe()).toBe(`${name}, ${currentYear - yearOfBirth} years old.`);
  });
});
