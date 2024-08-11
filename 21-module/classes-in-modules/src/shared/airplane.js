const Transport = require('./transport');

class Airplane extends Transport {
  constructor(maxspeed, model) {
    super(maxspeed);
    this.model = model;
  }
}

module.exports = Airplane;
