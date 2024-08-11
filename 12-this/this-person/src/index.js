function Person() {
  const person = {
    name: 'Leroy',
    friends: [],
    fillFriends(arrNewFriends) {
      this.friends.push(...arrNewFriends);
    },
  };
  return person;
}

// WARN: do not remove this line
module.exports = Person;
