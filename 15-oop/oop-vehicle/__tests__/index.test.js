const { Vehicle, Car, Moto } = require('../src');

describe('vehicle', () => {
  const vehicle = new Vehicle('1200kg', 'Audi', '2022', 'gas');
  const car = new Car('1500kg', 'Audi', '2023', 'gas', false);
  const moto = new Moto('800kg', 'Suzuki', '2016', 'gas');

  it('vehicle should have given properties', () => {
    expect(vehicle.weight).toBe('1200kg');
    expect(vehicle.model).toBe('Audi');
    expect(vehicle.year).toBe('2022');
    expect(vehicle.fuel).toBe('gas');

    expect(vehicle.drive()).toBe('Is driving...');
    expect(vehicle.describe()).toBe('Model: Audi, year: 2022');
  });

  it('car should have given properties', () => {
    expect(car.weight).toBe('1500kg');
    expect(car.model).toBe('Audi');
    expect(car.year).toBe('2023');
    expect(car.fuel).toBe('gas');
    expect(car.areWindowsOpen).toBe(false);

    expect(car.drive()).toBe('Is driving...');
    expect(car.describe()).toBe('Model: Audi, year: 2023');
  });

  it('car should have open/close windows methods', () => {
    car.openWindows();
    expect(car.areWindowsOpen).toBe(true);

    car.closeWindows();
    expect(car.areWindowsOpen).toBe(false);
  });

  it('moto should have given properties', () => {
    expect(moto.weight).toBe('800kg');
    expect(moto.model).toBe('Suzuki');
    expect(moto.year).toBe('2016');
    expect(moto.fuel).toBe('gas');

    expect(moto.drive()).toBe('Is driving...');
    expect(moto.describe()).toBe('Model: Suzuki, year: 2016');
  });

  it('moto should have null wheelie timer', () => {
    expect(moto.wheelieTimer).toBe(null);
  });

  it('moto should have start/stop wheelie methods', () => {
    jest.useFakeTimers();

    expect(moto.startWheelie()).toBe('Started wheeling...');

    setTimeout(() => {
      expect(moto.wheelieTimer).toBe(1);
    }, 1000);

    jest.runOnlyPendingTimers();

    setTimeout(() => {
      expect(moto.stopWheelie()).toBe('Last wheelie lasted 2 seconds.');
    }, 1000);

    jest.runOnlyPendingTimers();
  });

  it('should return "Already wheeling [x]s!" if try to run startWheelie() more that once', () => {
    jest.useFakeTimers();

    expect(moto.startWheelie()).toBe('Started wheeling...');

    setTimeout(() => {
      expect(moto.startWheelie()).toBe('Already wheeling 2s!');
      expect(moto.wheelieTimer).toBe(2);
    }, 2000);

    jest.runOnlyPendingTimers();

    setTimeout(() => {
      expect(moto.stopWheelie()).toBe('Last wheelie lasted 4 seconds.');
    }, 2000);

    jest.runOnlyPendingTimers();
  });
});
