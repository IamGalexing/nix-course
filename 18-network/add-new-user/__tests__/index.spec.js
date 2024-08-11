/* eslint-disable no-undef */
/**
 * @jest-environment jsdom
 */
require('cross-fetch/polyfill');
const run = require('../src/index');

describe('run function', () => {
  let fetchMock;

  beforeEach(() => {
    fetchMock = jest.spyOn(window, 'fetch');
  });

  afterEach(() => {
    fetchMock.mockRestore();
  });

  it('should make a POST request with the correct URL', async () => {
    const name = 'Doe';
    const username = 'Joe';
    const email = 'lorem@g.com';
    const phone = '123-456-789';
    const website = 'lorem-ipsum.com';

    await run(name, username, email, phone, website);

    expect(fetchMock).toHaveBeenCalledWith(
      'http://localhost:3000/users',
      expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, username, email, phone, website }),
      })
    );
  });

  it('should return the parsed response as the new user', async () => {
    const newUser = { id: 1, name: 'Doe', username: 'Joe' };
    const fetchResponse = {
      json: jest.fn().mockResolvedValue(newUser),
    };
    fetchMock.mockResolvedValue(fetchResponse);

    const result = await run('Doe', 'Joe', 'lorem@g.com', '123-456-789', 'lorem-ipsum.com');
    expect(result).toEqual(newUser);
  });
});
