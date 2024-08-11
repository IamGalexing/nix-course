const URL = 'http://localhost:3000/users';

async function run(id) {
  return fetch(`${URL}/${id}`)
    .then((data) => data.json())
    .then((user) => {
      if (user.phone !== null) return user;

      return fetch(`${URL}/${id}`, {
        method: 'DELETE',
      }).then(() => ({}));
    })
    .catch((error) => error);
}

module.exports = run;
