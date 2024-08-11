const URL = 'http://localhost:3000/users';

function run(name, username, email, phone, website) {
  return fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, username, email, phone, website }),
  })
    .then((data) => data.json())
    .catch(() => {
      throw new Error('Failed to fetch');
    });
}

module.exports = run;
