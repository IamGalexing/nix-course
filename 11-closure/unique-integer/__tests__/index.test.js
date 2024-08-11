const { mockRandom, resetMockRandom } = require('jest-mock-random');
const generateUniqInteger = require('../src');

describe('#generateUniqInteger', () => {
  it('should return function', () => {
    const result = generateUniqInteger();
    expect(result).toBeInstanceOf(Function);
  });

  it('should return random integer for 1st call', () => {
    const testedFunc = generateUniqInteger();

    // first call
    mockRandom([0.25]);
    const result = testedFunc();
    resetMockRandom();

    expect(result).toBe(3);
  });

  it('should return random integer if it is not generated before', () => {
    const testedFunc = generateUniqInteger();

    // first call
    mockRandom(0.25);
    testedFunc();
    resetMockRandom();

    // second call
    mockRandom(0.73);
    const result = testedFunc();
    resetMockRandom();

    expect(result).toBe(8);
  });

  it('should return array of previously generated numbers if some integer was generated before', () => {
    const testedFunc = generateUniqInteger();

    // first call
    mockRandom(0.25);
    testedFunc();
    resetMockRandom();

    // second call
    mockRandom(0.73);
    testedFunc();
    resetMockRandom();

    // third (repeated) call
    mockRandom(0.71);
    const result = testedFunc();
    resetMockRandom();

    expect(result).toEqual([3, 8]);
  });

  it('should reset result for next runs if some integer was generated before', () => {
    const testedFunc = generateUniqInteger();

    // first call
    mockRandom(0.25);
    testedFunc();
    resetMockRandom();

    // second call
    mockRandom(0.73);
    testedFunc();
    resetMockRandom();

    // third (repeated) call
    mockRandom(0.71);
    testedFunc();
    resetMockRandom();

    mockRandom(0.56);
    const result = testedFunc();
    resetMockRandom();

    expect(result).toEqual(6);
  });
});
