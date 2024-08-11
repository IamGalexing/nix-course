const indexObject = require('../src');

describe('toggleFeatureState', () => {
  it('should toggle the feature state', () => {
    expect(indexObject.feature.state).toBe(false);
    indexObject.toggleFeatureState(indexObject.logger.logStateMessage);
    expect(indexObject.feature.state).toBe(true);
    indexObject.toggleFeatureState(indexObject.logger.logStateMessage);
    expect(indexObject.feature.state).toBe(false);
  });

  it('should call the logStateMessage function with the correct message', () => {
    console.log = jest.fn(); // Mock console.log to test its output
    indexObject.toggleFeatureState(indexObject.logger.logStateMessage);
    expect(console.log).toHaveBeenCalledWith('Hi, Roaming Internet was activated');
    indexObject.toggleFeatureState(indexObject.logger.logStateMessage);
    expect(console.log).toHaveBeenCalledWith('Hi, Roaming Internet was deactivated');
  });
});
