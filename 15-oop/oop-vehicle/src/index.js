class Vehicle {
  constructor(weight, model, year, fuel) {
    this.weight = weight;
    this.model = model;
    this.year = year;
    this.fuel = fuel;
  }

  drive() {
    return 'Is driving...';
  }

  describe() {
    return `Model: ${this.model}, year: ${this.year}`;
  }
}

class Car extends Vehicle {
  constructor(weight, model, year, fuel) {
    super(weight, model, year, fuel);
    this.areWindowsOpen = false;
  }

  openWindows() {
    this.areWindowsOpen = true;
  }

  closeWindows() {
    this.areWindowsOpen = false;
  }
}

class Moto extends Vehicle {
  #increaseTime;

  constructor(weight, model, year, fuel) {
    super(weight, model, year, fuel);
    this.wheelieTimer = null;
  }

  startWheelie() {
    if (this.wheelieTimer === null) {
      this.wheelieTimer = 0;
      this.#increaseTime = setInterval(() => {
        this.wheelieTimer += 1;
      }, 1000);
      return 'Started wheeling...';
    }

    return `Already wheeling ${this.wheelieTimer}s!`;
  }

  stopWheelie() {
    clearInterval(this.#increaseTime);
    const time = this.wheelieTimer;
    this.wheelieTimer = null;
    return `Last wheelie lasted ${time} seconds.`;
  }
}

// WARN: do not remove this line
module.exports = { Vehicle, Car, Moto };
