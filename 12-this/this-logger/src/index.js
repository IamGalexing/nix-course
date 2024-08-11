const feature = {
  state: false,
};

const object = {
  name: 'Roaming Internet',
};

const logger = {
  name: 'logger',
  logStateMessage() {
    console.log(`Hi, ${this.name} was ${feature.state ? 'activated' : 'deactivated'}`);
  },
};

function toggleFeatureState(logStateMessage) {
  feature.state = !feature.state;
  logStateMessage.bind(object)();
}

// WARN: do not remove this line
module.exports = { logger, toggleFeatureState, feature };
