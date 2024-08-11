const { robot: Robot, randomizer: Randomizer, encrypter: Encrypter } = require('../src');

describe('Test prototypes of classes.', () => {
  let robot;
  let randomizer;
  let encrypter;
  const secretKey = 'Hello from Cybertron!';
  const n = 5;
  const robotMethods = ['sayHi', 'up', 'down', 'left', 'right'];

  beforeEach(() => {
    robot = new Robot('RoboCop');
    randomizer = new Randomizer('R2D2', n);
    encrypter = new Encrypter('Optimus Prime', secretKey);
  });

  it('should create correct classes instances', () => {
    expect(robot instanceof Robot).toBeTruthy();
    expect(randomizer instanceof Randomizer).toBeTruthy();
    expect(encrypter instanceof Encrypter).toBeTruthy();
  });

  robotMethods.forEach((method) => {
    it(`Robot class should have a ${method} method`, () => {
      expect(Object.prototype.hasOwnProperty.call(Robot.prototype, method)).toBeTruthy();
    });
  });

  it('Robot class should have a static "getCurrentPosition" method', () => {
    expect(Robot.getCurrentPosition).toBeTruthy();
    expect(robot.getCurrentPosition).toBeUndefined();
  });

  [new Robot('RoboCop'), new Randomizer('R2D2'), new Encrypter('Optimus Prime')].forEach((r) => {
    it('Robots should be able to "say hello"', () => {
      const expectation = `Hello! My name is ${r.name}!`;
      const result = r.sayHi();

      expect(result).toBe(expectation);
    });
  });

  it('Robot should change its location depending on the call to the navigation method. CASE 1', () => {
    robot.up();
    robot.right();
    robot.right();
    robot.up();
    robot.right();
    robot.right();
    robot.left();
    robot.down();

    expect(Robot.getCurrentPosition(robot)).toBe('X: 3; Y: 1');
  });

  it('Robot should change its location depending on the call to the navigation method. CASE 2', () => {
    robot.down();
    robot.left();
    robot.right();
    robot.down();
    robot.down();
    robot.down();
    robot.left();
    robot.down();

    expect(Robot.getCurrentPosition(robot)).toBe('X: -1; Y: -5');
  });

  it('RobotRandomizer should generate a rounded number value', () => {
    const result = randomizer.generateRandomNumber();

    expect(Number.isInteger(result)).toBeTruthy();
    expect(result).toBeLessThanOrEqual(n);
    expect(result).toBeGreaterThanOrEqual(0);
  });

  it('RobotEncrypter should encrypte value', () => {
    const result = encrypter.generateSecretValue();

    expect(result).toBe('!nortrebyC morf olleH');
  });
});
