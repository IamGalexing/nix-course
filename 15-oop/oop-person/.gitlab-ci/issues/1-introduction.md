# OOP Person

Create a class called Person which accepts the name of a person as a string, and his/her year of birth as a number. The instance of the class should have `describe()` method which returns person description in format '[name], [age] years old.'
For example, if John's year of birth is '2000', `describe()` method should return 'John, 23 years old.'.

## Test Examples

Look at tests for examples
[Tests](__tests__/index.spec.js)

or

```javascript
expect(John.name).toBe('John');
expect(John.yearOfBirth).toBe(2000);
expect(John.describe()).toBe('John, 23 years old.');
```

## Useful links

- [javascript.info](https://javascript.info/class)

/label level::elementary
/label js::oop
