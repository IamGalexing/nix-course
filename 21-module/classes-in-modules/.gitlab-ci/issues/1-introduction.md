# Classes in Modules

Create the `shared` folder in the `src` folder.

In the `shared` folder, create separate independent modules:

- `transport.js` module:
  - must contain and export the class with the name `Transport`;
  - the class must contain the following fields: `maxSpeed`.
- `airplane.js` module:
  - must contain and export the class with the name `Airplane` which is inherited from the `Transport` class;
  - the class must contain the following fields: `model` and `maxSpeed`.
- `car.js` module:
  - must contain and export the class with the name `Car` which is inherited from the `Transport` class;
  - the class must contain the following fields: `brand`, `model`, and `maxSpeed`.

Create the `script.js` file in the `src` folder in which you:

- import the created classes;
- create an instance of each of them;
- group your class imports into one group/import.
- log these modules.

Files scheme:

```text
  - src
    | - shared
    |   | - transport.js
    |   | - airplane.js
    |   | - car.js
    |   | - index.js
    | - script.js
```

/label level::elementary
/label js::modules
