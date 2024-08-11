# Render a filtered list

Now we know how we can render an array of strings in react.
In this task, you'll work with a very common data structure in `JS/React` - `array of object`.

You need to render all users from `DUMMY_DATA` with city `London`

- Go to the component folder components
  - create a folder User
  - inside this folder create the component `User`
- User component must take next props: `name`, `profession`, `city`
- Inside the component `User` create a user card.
  - User card must have an attribute `data-testid="user-card"`and contain next information:
  - userName with the following value and attribute `data-testid="user-name"`
  - profession with the following value and attribute `data-testid="user-profession"`
  - city with the following value and attribute `data-testid="user-city"`
- Make just `export` not `default export`
- **Don't forget about propTypes**
- **Don't forget about attributes**

Then you can go to `App.jsx` and use `User` component which will render data

## Test Examples

Look at tests for examples
[Tests](../../src/App.test.jsx)

### Useful links

- [Render list](https://react.dev/learn/rendering-lists#filtering-arrays-of-items)
- [map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [keys](https://react.dev/learn/rendering-lists#rules-of-keys)
/label level::elementary
/label react::component
