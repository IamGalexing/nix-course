const Transport = require('./transport');

class Car extends Transport {
  constructor(maxspeed, model, brand) {
    super(maxspeed);
    this.model = model;
    this.brand = brand;
  }
}

module.exports = Car;
