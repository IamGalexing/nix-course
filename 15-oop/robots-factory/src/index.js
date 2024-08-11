class Robot {
  constructor(name) {
    this.name = name;
    this.x = 0;
    this.y = 0;
  }

  sayHi() {
    return `Hello! My name is ${this.name}!`;
  }

  up() {
    this.y += 1;
  }

  down() {
    this.y -= 1;
  }

  left() {
    this.x -= 1;
  }

  right() {
    this.x += 1;
  }

  static getCurrentPosition(robot) {
    return `X: ${robot.x}; Y: ${robot.y}`;
  }
}

class RobotRandomizer extends Robot {
  constructor(name, maxValue) {
    super(name);
    this.maxValue = maxValue;
  }

  generateRandomNumber() {
    return Math.round(Math.random() * this.maxValue);
  }
}

class RobotEncrypter extends Robot {
  constructor(name, secretValue) {
    super(name);
    this.secretValue = secretValue;
  }

  generateSecretValue() {
    return this.secretValue.split('').reverse().join('');
  }
}

// WARN: do not remove this line
module.exports = {
  robot: Robot,
  randomizer: RobotRandomizer,
  encrypter: RobotEncrypter,
};
