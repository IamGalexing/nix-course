# Closure Array Sorting

There is an array of objects to sort like this:

```javascript
const users = [{name: "John", age: 20, surname: "Doe"}, ...];
```

Implement the function that can be used in array.sort as a callback function and sort the array by a field like this:

```javascript
user.sort(byField('name'));
```

## Test Examples

```javascript
const ageSortedKey = [
  { name: 'Pete', age: 18, surname: 'Star' },
  { name: 'Jennie', age: 19, surname: 'Nichols' },
  { name: 'John', age: 20, surname: 'Doe' },
];
const ageSortedAnswer = users.sort(byField('age'));
expect(ageSortedAnswer).toEqual(ageSortedKey);
```

### Useful links

- [MDM Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [Variable Scope, Closure](https://javascript.info/closure)

/label level::elementary
/label js::closure
