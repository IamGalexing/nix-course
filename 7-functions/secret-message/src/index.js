function run(message) {
  const decodedData = message.match(/[A-Z]/g);

  const secretMessage = decodedData ? decodedData.join('') : '';

  return secretMessage;
}

// Do not remove this line!
module.exports = run;
