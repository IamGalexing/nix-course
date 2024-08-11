# Logger

Imagine you are mobile network operator and you need to toggle the feature status and notify your customers about the current Roaming Internet status. To facilitate this, developers have created an object logger that includes a reusable logStateMessage function and you need to use it.

Add the `toggleFeatureState` function to make it work correctly. This function should change the feature.state value and call the passed `logStateMessage` function. But be careful, the context may be lost.

## Test Examples

Look at tests for examples
[Tests](__tests__/index.test.js)

or

```javascript
expect(toggleFeatureState(logStateMessage)).toHaveBeenCalledWith('Hi, Roaming Internet was activated');
expect(feature.state).toBe(true);
```

### Useful links

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)

/label level::elementary
/label js::this
