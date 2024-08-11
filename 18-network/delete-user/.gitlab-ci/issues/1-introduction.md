# Delete User

**`run`** method receives a user id. Use this id to fetch a user from the database (the *`db.json`* file). Check that user have a phone number property (not equal null). In case the user has a phone number return this user, but if the phone is null, you should remove this user from the database and return a response (a successful response will be just an empty object).

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

Look at tests for examples
[Tests](__tests__/index.spec.js)

or

Look at tests for examples:
[Tests](__tests__/index.spec.js)

### Useful links

- [json-server](https://www.npmjs.com/package/json-server)

/label level::elementary
