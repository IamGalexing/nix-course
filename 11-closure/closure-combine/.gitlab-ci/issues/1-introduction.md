# Closure-combine

There are 3 functions that take string as an argument: `uppercase`, `trimSpaces`, `reverseString`.
To get the result of executing all these functions, you need to execute the chain:

```javascript
const result = uppercase(trimSpaces(reverseString('Hello World!')));
```

Implement the `combine` function that will accept an unlimited number of functions and allow you to get the result like this:

```javascript
const updateString = combine(uppercase, trimSpaces, reverseString);
const result = updateString('Hello World!');
```

## Useful links

- [MDM Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [Variable Scope, Closure](https://javascript.info/closure)

/label level::elementary
/label js::closure
