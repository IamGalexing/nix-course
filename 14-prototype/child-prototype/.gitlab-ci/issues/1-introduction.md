# Child Prototype

You have a Child constructor function. But constructor is very poor, so let's add few methods and properties to the Child prototype:

 - Add a **`greet`** method. Method should return a string `Hello! My name is ${name}!`;
 - Add an *`energy`* property that equals 0;
 - Add a **`play`** method. The method can return one of 2 values. In case energy is 0, the method must return a string `Sorry, I am tired. I want to sleep!`, otherwise should decrease energy by 1 point and return it.
 - Add a **`sleep`** method. The method can return one of 2 values. In case energy is 10, the method must return a string `I don't want to sleep! I want to play!`, otherwise should increase energy by 1 point and return it.


## Test Examples

Look at tests for examples:
 - [Tests](__tests__/index.spec.js)

<!-- Don't forget about labels. Example: -->
<!-- /label level::elementary -->
<!-- /label js::prototype -->
