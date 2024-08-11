const run = require('../src');
const { notFoundMessage } = require('../src/users_api');

describe('run method', () => {
  it('should be asynchronous', () => {
    expect(run()).toBeInstanceOf(Promise);
  });

  it('should return a number', async () => {
    global.Math.random = () => 0.1;
    const result = await run();

    expect(result).toBe(123);
  });

  it(`should return an error message ${notFoundMessage} if getUsers returns rejected value`, async () => {
    global.Math.random = () => 0.6;
    const message = await run();

    expect(message).toBe(notFoundMessage);
  });
});
