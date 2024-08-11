function run(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  const arrMiddle = arr.length / 2;
  const floorMiddle = Math.floor(arrMiddle);
  let arrMedian;

  if (Number.isInteger(arrMiddle)) {
    arrMedian = (sortedArr[arrMiddle - 1] + sortedArr[arrMiddle]) / 2;
  } else {
    arrMedian = sortedArr[floorMiddle];
  }

  return arrMedian;
}

// Do not remove this line!
module.exports = run;
