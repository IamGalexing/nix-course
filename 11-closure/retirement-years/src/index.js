function run(retirementAge) {
  return (yearOfBirth) => {
    const currentYear = new Date().getFullYear();

    if (yearOfBirth > currentYear) {
      throw new Error('Please, enter valid year!');
    }

    const yearsToRetirement = retirementAge - (currentYear - yearOfBirth);

    return yearsToRetirement;
  };
}

// WARN: do not remove this line
module.exports = run;
