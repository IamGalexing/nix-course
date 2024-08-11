function Child(name) {
  this.name = name;
}

Child.prototype.greet = function () {
  return `Hello! My name is ${this.name}!`;
};

Child.prototype.energy = 0;

Child.prototype.play = function () {
  if (this.energy === 0) {
    return 'Sorry, I am tired. I want to sleep!';
  }
  this.energy -= 1;
  return this.energy;
};

Child.prototype.sleep = function () {
  if (this.energy === 10) {
    return "I don't want to sleep! I want to play!";
  }
  this.energy += 1;
  return this.energy;
};

// WARN: do not remove this line
module.exports = Child;
