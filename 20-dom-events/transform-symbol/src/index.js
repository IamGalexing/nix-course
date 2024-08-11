/* eslint-disable no-undef */
const baseMarkup = () => {
  const taskWrapper = document.createElement('div');
  taskWrapper.classList.add('task-wrapper');

  const paragraph = document.createElement('p');
  paragraph.innerHTML = 'Type symbols below:';

  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.classList.add('input');

  const output = document.createElement('div');
  output.classList.add('out');

  taskWrapper.append(paragraph);
  taskWrapper.append(input);
  taskWrapper.append(output);
  document.body.append(taskWrapper);
};

baseMarkup();

const getUpperCaseSymbol = (e) => {
  const out = document.querySelector('.out');
  out.textContent += e.key.toUpperCase();
};

document.querySelector('.input').addEventListener('keypress', getUpperCaseSymbol);

// WARN: do not remove this line
module.exports = baseMarkup;
