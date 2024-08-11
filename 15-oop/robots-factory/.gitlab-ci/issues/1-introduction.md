# Prototype - Robots-factory

- Write a **`Robot`** class that initializes *`name`* from arguments. Also, the class should have two additional properties: <span style="color: tomato">x = 0;</span> and <span style="color: tomato">y = 0;</span>
- Write a **`RobotRandomizer`**. This class should reuse the Robot class logic and have its own property *`maxValue`* (number) from arguments.
- Write a **`RobotEncrypter`**. This class should reuse the Robot class logic and have its own property *`secretValue`* (string) from arguments.

## Let's improve the Robot class by adding some methods:
- Add a `sayHi` method. The method should return a string with information about a robot: <span style="color: lightgreen">Hello! My name is {name}!</span>
- Add an `up` method. The method should update the Y coordinate - increase by one.
- Add a `right` method. The method should update the X coordinate - increase by one.
- Add a `down` method. The method should update the Y coordinate - decrease by one.
- Add a `left` method. The method should update the X coordinate - decrease by one.
- Add a `getCurrentPosition` method. <span style="color: red">Pay attention</span>, this method must not be accessible from RobotRandomizer and RobotEncrypter classes. The method receives a *`robot`* argument (instance of  RobotRandomizer or RobotEncrypter) and returns the current robot position as a string with the format: <span style="color: lightgreen">X: {x}; Y: {y}</span>

<br>

## Let's make our child robots a little special:
- **`RobotRandomizer`** should have a `generateRandomNumber` method. This method should return a rounded number, that is generated randomly from diapasons 0 >= value <= maxValue.
- **`RobotEncrypter`** should have a `generateSecretValue` method. This method should return reversed secretValue.

<br>

## Test Examples

Look at tests for examples:
[Tests](__tests__/index.spec.js)

<!-- Don't forget about labels. Example: -->
<!-- /label level::elementary -->
<!-- /label js::array -->
