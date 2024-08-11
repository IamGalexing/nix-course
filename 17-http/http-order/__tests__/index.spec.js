const rearrangeHttpRequests = require('../src');

describe('rearrangeHttpRequests', () => {
  it('should correctly rearrange HTTP requests', () => {
    const requests1 = ['HTTP/1.0 /abc GET', '/abc PATCH HTTP/1.1'];
    const expected1 = ['GET /abc HTTP/1.0', 'PATCH /abc HTTP/1.1'];
    expect(rearrangeHttpRequests(requests1)).toEqual(expected1);

    const requests2 = ['/def OPTIONS HTTP/2', '', 'HEAD HTTP/3 /foobar', 'HTTP/1.0 /python CONNECT'];
    const expected2 = ['OPTIONS /def HTTP/2', '', 'HEAD /foobar HTTP/3', 'CONNECT /python HTTP/1.0'];
    expect(rearrangeHttpRequests(requests2)).toEqual(expected2);
  });

  it('should not modify single-word requests', () => {
    const requests = ['GET', 'POST', 'DELETE'];
    expect(rearrangeHttpRequests(requests)).toEqual(requests);
  });
});
