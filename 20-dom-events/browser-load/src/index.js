/* eslint-disable no-undef */
const baseMarkup = () => {
  const taskWrapper = document.createElement('div');
  taskWrapper.classList.add('task-wrapper');

  const paragraphElement = document.createElement('p');
  paragraphElement.innerHTML = 'Load event';

  const outElement = document.createElement('div');
  outElement.classList.add('out');
  outElement.innerHTML = 'unchanged value';

  taskWrapper.append(paragraphElement);
  taskWrapper.append(outElement);

  document.body.append(taskWrapper);
};

baseMarkup();

const changeInitialValue = () => {
  document.querySelector('.out').textContent = 'changed value';
};

window.addEventListener('load', changeInitialValue);

// WARN: do not remove this line
module.exports = baseMarkup;
