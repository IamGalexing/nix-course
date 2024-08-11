const getPostData = require('../src');

describe('getPostData function', () => {
  it('should retrieve and parse post data from the API', async () => {
    const data = await getPostData();
    expect(data).toMatchObject({
      userId: expect.any(Number),
      id: expect.any(Number),
      title: expect.any(String),
      body: expect.any(String),
    });
  });
});
