# Fix the HTTP requests

Uh-Oh! It looks like the packets making up the requests sent to your website got mixed up!  All the requests you're receiving have the components out of order!

A normal HTTP request looks like this: GET /route HTTP/1.0

One request your website is receiving looks like this: /route HTTP/1.0 GET

Given a list of requests, rearrange the components of each to unscramble the HTTP requests and return the fixed list. If any element of the list of requests is blank, leave it that way. Make sure it supports special characters, and it should be able to handle lists of long requests!

## Test Examples

Look at tests for examples
[Tests](__tests__/index.spec.js)

or

```javascript
rearrange_http_requests(['HTTP/1.0 /abc GET', '/abc PATCH HTTP/1.1']) === ['GET /abc HTTP/1.0', 'PATCH /abc HTTP/1.1'];

rearrange_http_requests(['/def OPTIONS HTTP/2', '', 'HEAD HTTP/3 /foobar', 'HTTP/1.0 /python CONNECT']) ===
  ['OPTIONS /def HTTP/2', '', 'HEAD /foobar HTTP/3', 'CONNECT /python HTTP/1.0'];
```

## Useful links

- [Wikipedia](https://en.wikipedia.org/wiki/HTTP#Request_syntax)

/label level::elementary
/label js::http
