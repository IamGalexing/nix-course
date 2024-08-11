const { Transport, Airplane, Car } = require('./shared');

const transport = new Transport(100);
const airplane = new Airplane(500, 'mriya');
const car = new Car(220, 'civic', 'honda');

module.exports = { transport, airplane, car };
