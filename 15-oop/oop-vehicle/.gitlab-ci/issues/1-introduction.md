# OOP - Vehicle

Given a class Vehicle with properties *weight, model, year, fuel* and methods *drive(), describe()*. Create two sub-classes:

1) Car - which inherit all parent properties and methods and have own as *isWindowsOpen, openWindows(), closeWindows()*.
   Property *isWindowsOpen* should return true or false.
2) Moto - which inherit all parent properties and methods and have own as *wheelieTimer, startWheelie(), stopWheelie()*.
   Property *wheelieTimer* should return wheelie time in seconds.
   The *startWheelie()* method should start wheelieTimer and return string *'Started wheeling...'*. If you try to call the method again it should return *'Already wheeling [x]s!'*, where *[x]* is wheelie time in seconds.
   The *stopWheelie()* method should reset wheelieTimer and return a string *'Last wheelie lasted [x] seconds.'*, where *[x]* is wheelie time in seconds.

## Test Examples

Look at tests for examples
[Tests](__tests__/index.test.js)

or

```javascript
expect(car.drive()).toBe('Is driving...');
expect(car.describe()).toBe('Model: Audi, year: 2023');
car.openWindows();
expect(car.areWindowsOpen).toBe(true);
car.closeWindows();
expect(car.areWindowsOpen).toBe(false);

expect(moto.drive()).toBe('Is driving...');
expect(moto.describe()).toBe('Model: Suzuki, year: 2016');
expect(moto.startWheelie()).toBe('Started wheeling...');
```

## Useful links

- [Class inheritance](https://javascript.info/class-inheritance)

<!-- Don't forget about labels. Example: -->
/label level::elementary
/label js::OOP
