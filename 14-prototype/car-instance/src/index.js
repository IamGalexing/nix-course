function Car(model, milesPerGallon, tankSize) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tankSize = tankSize;
  this.tank = 0;
}

Car.prototype.info = function () {
  return `The car model is ${this.model}. This car has a tank with, a max size of ${this.tankSize} gallons. Fuel consumption is ${this.milesPerGallon} miles per gallon`;
};

Car.prototype.fill = function (gallons) {
  if (this.tank + gallons > this.tankSize) {
    this.tank = this.tankSize;
  } else {
    this.tank += gallons;
  }
  return this.tank;
};

Car.prototype.drive = function () {
  return this.tank * this.milesPerGallon;
};

// WARN: do not remove this line
module.exports = Car;
