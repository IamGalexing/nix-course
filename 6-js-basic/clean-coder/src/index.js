const coordinates = {
  x: 3,
  y: 2,
};
const a = 1;
let b = 2;
b = Number('3');

const calculate = (x1, x2) => Number(x1) + Number(x2);

const latitude = calculate(a, b);
const longitude = calculate(3, 4);

function run() {
  return latitude * coordinates.x + longitude * coordinates.y;
}

// WARN: do not remove this line
module.exports = run;
