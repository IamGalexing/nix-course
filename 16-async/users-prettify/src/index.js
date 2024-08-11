function run(users) {
  const usersPrettified = new Promise((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 100);
  });

  return usersPrettified
    .then((usersData) =>
      usersData.map((user) => {
        const userLowerCaseKeys = {};

        Object.keys(user).forEach((key) => {
          userLowerCaseKeys[key.toLowerCase()] = user[key];
        });

        return userLowerCaseKeys;
      })
    )
    .then((usersKeysLowerCase) => usersKeysLowerCase.map((user) => ({ ...user, birthdate: new Date(user.birthdate) })))
    .then((usersBirthUpdated) => usersBirthUpdated.map((user) => ({ ...user, gender: user.gender.toLowerCase() })))
    .catch((error) => error.message);
}

// WARN: do not remove this line
module.exports = run;
