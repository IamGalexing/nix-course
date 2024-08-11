const fetch = require('node-fetch');
const run = require('../src/index');

global.fetch = fetch;
describe('run function', () => {
  test('should return the user object if the phone number is not null', async () => {
    const user = {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      phone: '1-770-736-8031',
      website: 'hildegard.org',
    };

    const result = await run(1);
    expect(result).toEqual(user);
  });

  test('should return an empty object if the phone number is null and delete the user from the database', async () => {
    const result = await run(5);
    expect(result).toEqual({});
  });
});
