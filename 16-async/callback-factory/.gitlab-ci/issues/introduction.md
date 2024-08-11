# Callback Factory

You already know a lot about JavaScript. So this time you need to use all your knowledge and skills. You already have a predefined code in the **`index.js`** file.

`getUsers` is a method that simulates an HTTP request and returns your data. The method returns an array of users.
*(Database is in the **`users_api.js`** file so you can check what it looks like).*
**Example of user object:**

```javascript
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "phone": 17707368031,
  "website": "hildegard.org"
}
```

You should implement a method `run`, that receives three arguments *`addAgeCallback`*,*`filterCallback`*,  and *`sortCallback`*. All these arguments are callbacks. The method should return the result of handling data or an error. It should be a Promise.
How it should work:

- *`getUsers`* method returns a Promise, that returns the user's array.
- callbacks will execute in the order they passed in arguments.
- callback should handle a user's data;
- use `.then` for every callback;
- in the case where the callback is not passed, an error should be thrown. But do not forget to handle these errors. They must not break our code:

```javascript
throw new Error('{METHOD_NAME} not defined');
```

Also you need to implement callback functions *`createAddUsersAgeCallback`*, *`createFilterUsersCallback`* and *`createSortUsersCallback`*.

- *`createAddUsersAgeCallback`*:
  - method should returns a callback;
  - that callback receives *`array`* of *`users`* as argument;
  - that callback adds a new property *`age`* for each user;
  - value of *`age`* should be a randomly generated number (1 >= X <= 10);
  - the number must be rounded to an integer value;
  - return *`users`* that was changed by adding a new property *`age`*;

  For example:
  put this object:

  ```javascript
  {
    id: 1,
    name: 'Leanne Graham',
  }
  ```

  receive this object:

  ```javascript
  {
    id: 1,
    name: 'Leanne Graham',
    age: 4
  }
  ```

- *`createFilterUsersCallback`*:
  - method takes one argument *`condition`*;
  - method must return a callback;
  - this callback receives *`users`* as argument;
  - this callback returns a new array with users that match the condition;

- *`createSortUsersCallback`*:
  - method takes a single *`key`* argument, *`key`* must be in user object like: `id`, `name` etc;
  - method must return a callback;
  - this callback receives *`users`*;
  - this callback returns a sorted array of users;
  - the *`key`* argument helps you understand which property is used to sort a user object.
  - do not forget that the value can be of type *`string`* or *`number`*.

We added a script command for running your app to make your developing process more comfortable. Just write *`npm run start-dev`* and press enter, and your code will run. Use the `console.log()` method for debugging your code.

## Test Examples

Look at tests for examples:
[Tests](__tests__/index.spec.js)

### Useful links

- [.then](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)

/label level::elementary
/label js::asynchronous
