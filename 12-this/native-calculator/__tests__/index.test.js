const { Calculator, NotNumberError, DevideZeroError, AssignResultError } = require('../src');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test('add should correctly add numbers', () => {
    calculator.add(5);
    expect(calculator.currentValue).toBe(5);

    calculator.add(7);
    expect(calculator.currentValue).toBe(12);

    expect(() => {
      calculator.add('abc');
    }).toThrowError(NotNumberError);
  });

  test('subtract should correctly subtract numbers', () => {
    calculator.subtract(5);
    expect(calculator.currentValue).toBe(-5);

    calculator.subtract(7);
    expect(calculator.currentValue).toBe(-12);

    expect(() => {
      calculator.subtract('abc');
    }).toThrowError(NotNumberError);
  });
  test('multiply should correctly multiply numbers', () => {
    calculator.multiply(5);
    expect(calculator.currentValue).toBe(0);

    calculator.add(3);
    calculator.multiply(7);
    expect(calculator.currentValue).toBe(21);

    expect(() => {
      calculator.multiply('abc');
    }).toThrowError(NotNumberError);
  });

  test('divide should correctly divide numbers', () => {
    calculator.add(10);
    calculator.divide(2);
    expect(calculator.currentValue).toBe(5);

    expect(() => {
      calculator.divide('abc');
    }).toThrowError(NotNumberError);

    expect(() => {
      calculator.divide(0);
    }).toThrow(DevideZeroError);
  });

  test('currentValue should not be directly assignable', () => {
    expect(() => {
      calculator.currentValue = 42;
    }).toThrow(AssignResultError);
  });
});
