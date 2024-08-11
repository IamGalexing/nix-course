function run() {
  const user = {};
  user.name = 'John';
  user.surname = 'Doe';

  user.name = 'Jane';

  return user;
}

// WARN: do not remove this line
module.exports = run;
