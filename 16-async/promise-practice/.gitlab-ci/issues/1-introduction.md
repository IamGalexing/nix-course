# Promise practice

This task helps you improve your knowledge about Promise and asynchronous in general.

**`run`** function must return a Promise. Promise has one of type Number or String.
Also you have 3 methods **`getUsers`**, **`getUserWithFriends`**, **`getUserByName`**.
All of these methods are asynchronous and return a Promise. But let's go step by step.

- 1. You must receive a *`users`* data. Use for that **`getUsers`** method. But pay attention, method can return a failed Promise. You must handle this case and the **`run`** method must return Promise of string. String it's just an error messsage that you take from imports - *`notFoundMessage`* variable.

- 2. **`getUsers`** returns you a user's array. You must handle this data and take only users that have a *`website`* property.

- 3. We have an array of users for now and you must get their friends. Use the **`getUserWithFriends`** method for that. Pass an id and the method returns you a Promise of an object with user friends or a failed Promise in case data about this user does not exist. So do not forget to handle error cases.

- 4. As a result of the previous point will be an array of object that looks something like this:

> ```javascript
> {
>   id: 123,
>   friends: ['John', 'Doe']
> }
>```

- You should find a user that has friends more than others.

- 5. Take a founded user form the previous point and get users by name from the *`friends`* array. Use the **`getUserByName`** method for that. The method returns a Promise of a user object or a failed Promise in case data does not exist. Do not forget to handle error cases.

- 6. And finally, return a number of points from the *`points`* property from each user. This amount will be result of the **`run`** method.

**`FYI!`** We added a *`npm run start-dev`* script to make your development process more comfortable.

## Test Examples

Look at tests for examples:
[Tests](__tests__/index.spec.js)

### Useful links

- [Promise (basics)](https://javascript.info/promise-basics);
- [Promises chaining](https://javascript.info/promise-chaining);
- [Promise API (Promise.all)](https://javascript.info/promise-api#promise-all)

<!-- Don't forget about labels. Example: -->
/label level::elementary
/label js::asynchronous
