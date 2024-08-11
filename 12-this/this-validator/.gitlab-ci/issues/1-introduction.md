# This Validator

Implement a function `validator` that works with a chain of calls. IsValid function is instantiated with the input string as a parameter. Required method indicates that the input string is mandatory and must be provided. If the input string is missing or empty, the validation process will immediately fail, and an appropriate error message will be returned.
isString method is used to verify that the input is indeed a string.
min method sets a minimum length requirement for the string.

```javascript
new IsValid('Test string').required().isString().min(5);
```

## Test Examples

Look at tests for examples

### Useful links

- [this](https://javascript.info/object-methods)
- [MDM this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

/label level::elementary
/label js::this
