/* eslint-disable consistent-return */
const fs = require('node:fs');

function run(name, email, message) {
  const jsonData = JSON.stringify({ name, email, message }, null, 2);

  try {
    fs.writeFileSync('./data.json', jsonData);
  } catch (error) {
    return error.message;
  }
}

// WARN: do not remove this line
module.exports = run;
