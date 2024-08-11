const { getUsers } = require('./users_api');

function run(filterCallback, sortCallback, addAgeCallback) {
  if (!addAgeCallback) {
    return new Error('addAgeCallback not defined');
  }
  if (!filterCallback) {
    return new Error('filterCallback not defined');
  }
  if (!sortCallback) {
    return new Error('sortCallback not defined');
  }

  return getUsers()
    .then((users) => {
      return [filterCallback, sortCallback, addAgeCallback].reduce((acc, callback) => callback(acc), users);
    })
    .catch((error) => {
      return new Error(error.message);
    });
}

function createAddUsersAgeCallback() {
  return (users) =>
    users.map((user) => ({
      ...user,
      age: Math.floor(Math.random() * 10) + 1,
    }));
}

function createFilterUsersCallback(condition) {
  return (users) => users.filter(condition);
}

function createSortUsersCallback(key) {
  return (users) =>
    [...users].sort((a, b) => (typeof a[key] === 'string' ? a[key].localeCompare(b[key]) : a[key] - b[key]));
}

// WARN: do not remove this line
module.exports = { run, createAddUsersAgeCallback, createFilterUsersCallback, createSortUsersCallback };
