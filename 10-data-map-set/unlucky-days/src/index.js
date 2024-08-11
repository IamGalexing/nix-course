function run(year) {
  const yearDate = new Date(year, 0, 13);

  const arrMonths = Array.from({ length: 12 }, (_, month) => month);

  const unluckyDaysCount = arrMonths.reduce((sum, month) => {
    yearDate.setMonth(month);
    return yearDate.getDay() === 5 ? sum + 1 : sum;
  }, 0);

  return unluckyDaysCount;
}

module.exports = run;
