/* eslint-disable no-return-await */
const { getUsers, getUserWithFriends, getUserByName, notFoundMessage } = require('./users_api');

function run() {
  return getUsers()
    .then((usersData) => {
      const usersWithWebsite = usersData.filter((user) => user.website !== null);

      const usersWithFriendsPromises = usersWithWebsite.map((user) => getUserWithFriends(user.id));

      return Promise.allSettled(usersWithFriendsPromises).then((result) => {
        return result.reduce(
          (acc, user) => {
            if (user.status === 'fulfilled' && user.value.friends.length > acc.friends.length) {
              return user.value;
            }
            return acc;
          },
          { friends: [] }
        );
      });
    })
    .then((userWithMostFriends) => {
      const friendsPromises = userWithMostFriends.friends.map((friendName) => getUserByName(friendName));

      return Promise.allSettled(friendsPromises).then((result) => {
        return result.reduce((acc, user) => {
          if (user.status === 'fulfilled') {
            return acc + user.value.points;
          }
          return acc;
        }, 0);
      });
    })
    .catch(() => notFoundMessage);
}

module.exports = run;
