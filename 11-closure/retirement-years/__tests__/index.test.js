const retirement = require('../src');

describe('#retirement', () => {
  beforeEach(() => {
    const mockDate = new Date(1584882448591); // mock for 2020
    jest.spyOn(global, 'Date').mockImplementation(() => mockDate);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return function', () => {
    const result = retirement(66);
    expect(result).toBeInstanceOf(Function);
  });

  it('should return amount of ages to retirement', () => {
    const retirementUS = retirement(65);
    const result = retirementUS(2000);
    expect(result).toBe(45);
  });

  it('should throw an error if you enter the year of birth more than current', () => {
    const retirementUS = retirement(65);

    expect(() => {
      retirementUS(2030);
    }).toThrowError('Please, enter valid year!');
  });
});
