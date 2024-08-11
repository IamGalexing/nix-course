# Prototype - Create-car

## **Description:**
- Create a *`Car`* constructor that initializes *`model`*, *`milesPerGallon`*, and *`tankSize`* from arguments;
- Also, the Car should have a *`tank`* property equal to `0` by default;

Let's improve the Car constructor by adding some methods:
- Add an `info` method. The method should return a string with information about a car. String has the next format: <span style="font-style: italic; color: lightgreen">The car model is {model}. This car has a tank with, a max size of {tankSize} gallons. Fuel consumption is {milesPerGallon} miles per gallon</span>

- Add a `fill` method with *`gallons`* as an argument. The method must update the *`tank`* property by adding passed gallons into the remaining amount of gasoline in the tank. But do not forget that the tank has a limit, and it can only hold a certain amount of gasoline.

- Add a `drive` method. The method should return a distance that the car can drive.

## Test Examples

Look at tests for examples:
- [Tests](__tests__/index.spec.js)


<!-- Don't forget about labels. Example: -->
<!-- /label level::elementary -->
<!-- /label js::prototype -->
