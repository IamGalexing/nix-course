/* eslint-disable no-plusplus */
const Person = require('../src');

describe('Person', () => {
  it('person', () => {
    const people = [['bob', 'john'], ['bob', 'john', 'dave'], [], ['bob', 'john', 'dave', 'matt', 'alex']];

    for (let i = 0; i < 4; i++) {
      const person = Person();
      person.friends = ['jack'];
      person.fillFriends(people[i]);

      expect(person.friends).toEqual(['jack', ...people[i]]);
    }
  });
});
