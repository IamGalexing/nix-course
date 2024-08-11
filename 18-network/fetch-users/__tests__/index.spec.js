const run = require('../src/index');

describe('run', () => {
  it('should fetch and return users', async () => {
    const mockUsers = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
    ];
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockUsers),
    });

    const result = await run();

    expect(global.fetch).toHaveBeenCalledWith('http://localhost:3000/users');
    expect(result).toEqual(mockUsers);
  });

  it('should handle failed fetch request', async () => {
    const error = new Error('Failed to fetch');
    global.fetch = jest.fn().mockRejectedValue(error);

    await expect(run()).rejects.toThrowError(error);
  });
});
