const run = require('../src/multiply');

describe('elementary-01', () => {
  it('mul number * number => equal number', () => {
    expect(run(3, 2)).toBe(6);
    expect(run(5, 4)).toBe(20);
    expect(run(-2, 3)).toBe(-6);
    expect(run(0, 3)).toBe(0);
    expect(run(0, -4)).toBe(-0); // Shoud to check?
    expect(run(2.5, -4)).toBe(-10);
    expect(run(2, -3.5)).toBe(-7);
  });

  it("mul `not number` * number => 'Not a Number'", () => {
    expect(run.bind('', 3)).toThrow('Not a Number');
    expect(run.bind(2, '')).toThrow('Not a Number');
    expect(run.bind(null, '')).toThrow('Not a Number');
    expect(run.bind(null, 4)).toThrow('Not a Number');
    expect(run.bind(5, undefined)).toThrow('Not a Number');
    expect(run.bind(4, [])).toThrow('Not a Number');
    expect(run.bind({}, 5)).toThrow('Not a Number');
  });
});
