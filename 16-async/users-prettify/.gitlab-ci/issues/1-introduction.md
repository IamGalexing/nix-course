# Users Prettify

Write a function that returns a promise with user list.( `new Promise((resolve) => setTimeout(() => resolve(users), 100))` ) Your function gets user's data like in the example below. Let's prettify it.

Example of User object:

```javascript
[
  {
    id: 1,
    FIRST_NAME: 'Giraldo',
    LAST_NAME: 'Garmey',
    EMAIL: 'ggarmey0@washington.edu',
    GENDER: 'Male',
    birthdate: '07-Jul-1962',
  },
  {...}
];
```

- create and return a promise with user data.
- you need to use `.then` for every next manipulation:
  - convert all the keys of each `user` object to lowercase.
  - convert the `birthdate` property of each `user` object to a `Date` object.
  - converts the `gender` property of each `user` object to lowercase.
- function `run(users)` returns a promise with the updated user data, which is a list of `user` objects with lowercase keys, `birthdate` converted to `Date` objects, and lowercase `gender` property.

## Test Examples

Look at tests for examples
[Tests](__tests__/index.spec.js)

### Useful links

- [Asynchronous](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)
- [Promise](https://javascript.info/promise-basics)
- [.then](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)
