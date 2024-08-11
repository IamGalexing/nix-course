/* eslint-disable no-undef */
const baseMarkup = () => {
  const taskWrapper = document.createElement('div');
  taskWrapper.classList.add('task-wrapper');

  const paragraphElement = document.createElement('p');
  paragraphElement.innerHTML = 'Resize window';

  const outElement = document.createElement('div');
  outElement.classList.add('out');
  outElement.innerHTML = '0';

  taskWrapper.append(paragraphElement);
  taskWrapper.append(outElement);
  document.body.append(taskWrapper);
};

baseMarkup();

window.addEventListener('resize', () => {
  const out = document.querySelector('.out');
  out.textContent = +out.textContent + 1;
});

// WARN: do not remove this line
module.exports = baseMarkup;
