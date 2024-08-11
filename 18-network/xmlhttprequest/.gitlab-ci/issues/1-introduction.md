# XMLHttpRequest

In this task we’ll work with the fundamental type for working with API – [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest). You could know about modern features such as [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) or [axios](https://axios-http.com/docs/intro). Today our main goal is to deeply understand XMLHttpRequest.

`**IMPORTANT DON'T USE FETCH OR AXIOS ONLY XMLHttpRequest**`

Let’s create a simple HTTPRequest. You need to get the first post from this API `https://jsonplaceholder.typicode.com/posts`.

When you work with API  one of the most important things is working with rejected API requests. If our API returns information without error we should return it. If our request is rejected we must carry about this

Return the first post from this API `https://jsonplaceholder.typicode.com/posts`. If the request is rejected(check a request status). You must return an [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/Error) object with [status](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/status) and [statusText](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/statusText)

After writing the code, you need all tests to pass without errors. 
## Useful links

- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
- [javascript.info](https://javascript.info/xmlhttprequest)