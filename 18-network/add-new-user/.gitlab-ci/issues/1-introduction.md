# Add New User

**`run`** method should create a new user (user should be added to the *`users`* array in the *`db.json`* file) and return a Promise of a new created user. Use *`fecth`* API. URL already declared in the index.js file. Do not forget about for creating a new user you need to perform a request and set the body content type to JSON (application/json). The body of the request is an object with the same properties as the **`run`** method arguments. You do not need to add an *`id`* property to the body of the request, it's created automatically.

Example of a user object:

```javascript
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "phone": "1-770-736-8031",
  "website": "hildegard.org"
}
```

Run the project in the following way:

- *`npm run server`* - this command runs a server for making requests.
- *`npm run dev`* - this command runs localhost and opens a new tab inside your browser.

## Test Examples

Look at tests for examples:
[Tests](__tests__/index.spec.js)

## Useful links

- [json-server](https://www.npmjs.com/package/json-server)

/label level::elementary
/label js::network-request
