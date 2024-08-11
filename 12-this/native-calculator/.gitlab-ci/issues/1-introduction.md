# Calculator

Create a `Calculator class` in JavaScript that can perform basic mathematical operations like `addition`, `subtraction`, `multiplication`, and `division`. The class should have a private `currentValue` property that starts at `0` and can be modified using methods like `add`, `subtract`, `multiply`, and `divide`. Finally, you should ensure that the `currentValue` property cannot be directly modified. Use predefined errors for exceptions.

## Test Examples

Look at tests for examples
[Tests](__tests__/index.test.js)

or

```javascript
const calculator = new Calculator();
calculator.add(5);
expect(calculator.currentValue).toBe(5);
```

## Useful liks

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [Javascript.info](https://javascript.info/object-methods)

/label level::elementary
/label js::this
/label js::class
