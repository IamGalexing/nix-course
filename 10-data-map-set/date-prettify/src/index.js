function run(date) {
  const splittedDate = date.split('/');
  const [month, day, year] = splittedDate;

  const formattedDate = `${day}-${month}-${year}`;

  return formattedDate;
}

// WARN: do not remove this line
module.exports = run;
