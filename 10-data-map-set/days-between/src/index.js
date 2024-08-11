function run(arrStartDate, arrEndDate) {
  const [startYear, startMounth, startDay] = arrStartDate;
  const [endYear, endMonth, endDay] = arrEndDate;

  const startDate = new Date(startYear, startMounth - 1, startDay);
  const endDate = new Date(endYear, endMonth - 1, endDay);

  const differenceMs = Math.abs(endDate - startDate);

  const differenceDays = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));

  return differenceDays;
}

module.exports = run;
