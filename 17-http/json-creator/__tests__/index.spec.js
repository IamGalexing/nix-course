const fs = require('fs');

const run = require('../src/index');

test('run creates a JSON file', async () => {
  const name = 'John Doe';
  const email = 'johndoe@example.com';
  const message = 'Hello, this is a message!';

  await run(name, email, message);

  const data = fs.readFileSync('./data.json');

  const jsonObject = JSON.parse(data);
  expect(jsonObject.name).toEqual(name);
  expect(jsonObject.email).toEqual(email);
  expect(jsonObject.message).toEqual(message);

  // Cleanup - delete the file after the test is done
  fs.unlinkSync('./data.json');
});
