const run = require('../src');

describe('Test run function', () => {
  it('should convert keys to lowercase', async () => {
    const users = [
      {
        id: 1,
        FIRST_NAME: 'Giraldo',
        LAST_NAME: 'Garmey',
        EMAIL: 'ggarmey0@washington.edu',
        GENDER: 'Male',
        birthdate: '07-Jul-1962',
      },
      {
        id: 2,
        FIRST_NAME: 'Drona',
        LAST_NAME: 'Battlestone',
        EMAIL: 'dbattlestone1@sciencedirect.com',
        GENDER: 'Female',
        birthdate: '04-Nov-1987',
      },
    ];
    const expected = [
      {
        id: 1,
        first_name: 'Giraldo',
        last_name: 'Garmey',
        email: 'ggarmey0@washington.edu',
        gender: 'male',
        birthdate: new Date('07-Jul-1962'),
      },
      {
        id: 2,
        first_name: 'Drona',
        last_name: 'Battlestone',
        email: 'dbattlestone1@sciencedirect.com',
        gender: 'female',
        birthdate: new Date('04-Nov-1987'),
      },
    ];
    const result = await run(users);
    expect(result).toEqual(expected);
  });
});
