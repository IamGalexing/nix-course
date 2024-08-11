const Child = require('../src');

describe('child', () => {
  const name = 'Joe';
  const child = new Child(name);

  it('should be defined', () => {
    expect(child).toBeDefined();
  });

  it('should have a "name" property', () => {
    expect(child.name).toBe(name);
  });

  it('should have an "energy" property', () => {
    expect(child.energy).toBe(0);
  });

  it('should have a "greet" method that returns a string', () => {
    expect(child.greet()).toBe(`Hello! My name is ${name}!`);
  });

  it('should have a "play" method that return a string if energe is 0', () => {
    const result = child.play();

    expect(result).toBe('Sorry, I am tired. I want to sleep!');
  });

  it('should have a "play" method that decreases the "energy" property and return it', () => {
    child.energy = 5;
    const result = child.play();

    expect(result).toBe(4);
  });

  it('should have a "sleep" method that return a string if energe is 10', () => {
    child.energy = 10;
    const result = child.sleep();

    expect(result).toBe(`I don't want to sleep! I want to play!`);
  });

  it('should have a "sleep" method that increases the "energy" property and return it', () => {
    child.energy = 5;
    const result = child.sleep();

    expect(result).toBe(6);
  });
});
