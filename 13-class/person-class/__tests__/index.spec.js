const Person = require('../src');

const RealDate = Date.now;

describe('Test class Person', () => {
  let person;
  const dateOfBirth = new Date('05/01/1999');

  const currentAge = () => {
    const birthdateDate = new Date(dateOfBirth);

    const currentDate = new Date();

    let age = currentDate.getFullYear() - birthdateDate.getFullYear();

    const hasBirthdayOccurred =
      currentDate.getMonth() > birthdateDate.getMonth() ||
      (currentDate.getMonth() === birthdateDate.getMonth() && currentDate.getDate() >= birthdateDate.getDate());

    if (!hasBirthdayOccurred) {
      age -= 1;
    }
    return age;
  };

  beforeAll(() => {
    global.Date.now = jest.fn(() => new Date('2023-01-01T10:20:30Z').getTime());
  });

  afterAll(() => {
    global.Date.now = RealDate;
  });

  beforeEach(() => {
    person = new Person('Vlad', 'Dracula', dateOfBirth);
  });

  it('should create instance of Person', () => {
    expect(person instanceof Person).toBeTruthy();
  });

  it('should get right full name', () => {
    expect(person.getFullName()).toEqual('Vlad Dracula');
  });

  it('should return right years old', () => {
    expect(person.getAge()).toEqual(currentAge());
  });

  it('should return date of birth', () => {
    expect(person.dateOfBirth).toEqual(dateOfBirth);
  });

  it('should set valid date of birth', () => {
    person.dateOfBirth = new Date('03/01/1994');
    expect(person.dateOfBirth).toEqual(new Date('03/01/1994'));
  });

  it('should return right info', () => {
    expect(person.getInfo()).toEqual(`My name is Vlad Dracula. I'm ${currentAge()} years old.`);
  });
});
