const URL = 'http://localhost:3000/users';

function run() {
  return fetch(URL)
    .then((data) => data.json())
    .catch(() => {
      throw new Error('Failed to fetch');
    });
}

module.exports = run;
