const Car = require('../src');

describe('Test class Car', () => {
  let car;
  const methodsName = ['info', 'fill', 'drive'];
  const model = 'Audi';
  const milesPerGallon = 5;
  const tankSize = 100;

  beforeEach(() => {
    car = new Car(model, milesPerGallon, tankSize);
  });

  it('should create instance of Car', () => {
    expect(car instanceof Car).toBeTruthy();
  });

  methodsName.forEach((method) => {
    it(`A Car prototype should contain the ${method} method`, () => {
      expect(Object.prototype.hasOwnProperty.call(Car.prototype, method)).toBeTruthy();
    });
  });

  it('should have a "tank" property equals 0 initially', () => {
    expect(car.tank).toEqual(0);
  });

  it('should have an "info" method, that return string with information about car', () => {
    const expectation = `The car model is ${model}. This car has a tank with, a max size of ${tankSize} gallons. Fuel consumption is ${milesPerGallon} miles per gallon`;
    expect(car.info()).toEqual(expectation);
  });

  it(`should have a "fill" method, that updates a "tank" property and returns it. CASE: gallons < tankSize`, () => {
    let gasInTank = car.fill(50);
    gasInTank = car.fill(25);

    expect(gasInTank).toBe(75);
  });

  it(`should have a "fill" method, that updates a "tank" property and returns it. CASE: gallons > tankSize`, () => {
    let gasInTank = car.fill(75);
    gasInTank = car.fill(50);

    expect(gasInTank).toBe(car.tankSize);
  });

  it(`should have a "drive" method, that returns a distance which the car can drive. CASE: Empty tank`, () => {
    const distance = car.drive();

    expect(distance).toBe(0);
  });

  it(`should have a "drive" method, that returns a distance which the car can drive. CASE: Tank with gasoline`, () => {
    const gasoline = 50;
    car.fill(gasoline);
    const distance = car.drive();

    expect(distance).toBe(milesPerGallon * gasoline);
  });
});
