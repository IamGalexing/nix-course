const baseMarkup = () => {
  const taskWrapper = document.createElement('div');
  taskWrapper.classList.add('task-wrapper');

  const paragraphElement = document.createElement('p');
  paragraphElement.innerHTML = 'Scroll event';

  const outElement = document.createElement('div');
  outElement.classList.add('out');
  outElement.innerHTML = '1';

  taskWrapper.append(paragraphElement);
  taskWrapper.append(outElement);
  document.body.append(taskWrapper);
};

baseMarkup();

let value = 1;

const changeInitialValue = () => {
  value += 1;
  document.querySelector('.out').textContent = value;
};

window.addEventListener('scroll', changeInitialValue);

// WARN: do not remove this line
module.exports = baseMarkup;
