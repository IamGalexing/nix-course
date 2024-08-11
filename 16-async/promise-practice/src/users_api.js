const users = [
  {
    id: 1,
    username: 'Bret',
    website: 'hildegard.org',
    points: 61,
  },
  {
    id: 2,
    username: 'Antonette',
    website: null,
    points: 44,
  },
  {
    id: 3,
    username: 'Samantha',
    website: null,
    points: 19,
  },
  {
    id: 4,
    username: 'Karianne',
    website: 'kale.biz',
    points: 78,
  },
  {
    id: 5,
    username: 'Kamren',
    website: null,
    points: 2,
  },
  {
    id: 6,
    username: 'Leopoldo Corkery',
    website: null,
    points: 88,
  },
  {
    id: 7,
    username: 'Elwyn Skiles',
    website: null,
    points: 73,
  },
  {
    id: 8,
    username: 'Maxime Nienow',
    website: null,
    points: 34,
  },
  {
    id: 9,
    username: 'Delphine',
    website: 'conrad.com',
    points: 55,
  },
  {
    id: 10,
    username: 'Moriah Stanton',
    website: 'ambrose.net',
    points: 11,
  },
];

const usersFriend = [
  {
    id: 1,
    friends: ['Samantha', 'Karianne'],
  },
  {
    id: 3,
    friends: ['Bret', 'Antonette', 'Leopoldo Corkery', 'Samantha', 'Elwyn Skiles'],
  },
  {
    id: 5,
    friends: ['Leopoldo Corkery', 'Elwyn Skiles'],
  },
  {
    id: 6,
    friends: ['Samantha', 'Kamren'],
  },
  {
    id: 7,
    friends: ['Kamren'],
  },
  {
    id: 9,
    friends: ['Moriah Stanton', 'Karianne', 'Maxime Nienow', 'Helga'],
  },
];

const notFoundMessage = 'Sorry, data not found!';

/**
 * @returns {Promise<any | Error>} Promise of a users array or an Error
 */
function promiseFactory(data, shouldRej) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (shouldRej) {
        rej(new Error('Error! Data not found!'));
      } else {
        res(data);
      }
    }, 1000);
  });
}

/**
 * @returns {Promise<Array<object> | Error>} Promise of a users array or an Error
 */
function getUsers() {
  const shouldReject = Math.random() > 0.5;

  return promiseFactory(users, shouldReject);
}

/**
 * @param {number} id
 * @returns {Promise<object | Error>} Promise with a user or an Error
 */
function getUserWithFriends(id) {
  const foundUser = usersFriend.find((u) => u.id === id);

  return promiseFactory(foundUser, !foundUser);
}

/**
 * @param {string} name
 * @returns {Promise<object | Error>} Promise with a user or an Error
 */
function getUserByName(name) {
  const foundUser = users.find((u) => u.username === name);

  return promiseFactory(foundUser, !foundUser);
}

module.exports = { getUsers, getUserWithFriends, getUserByName, notFoundMessage };
