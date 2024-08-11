const { findMax, getPower, capitalize } = require('./utils');

const arr = [30, 10, 40, -20];
console.log(`The max number of array [${arr.join(', ')}] is ${findMax(arr)}.`);

const num = 4;
console.log(`The number ${num} to the 2nd power is ${getPower(num)}.`);

const word = 'example';
console.log(`Capitalized word "${word}" is "${capitalize(word)}".`);
