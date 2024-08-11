const baseMarkup = () => {
  const taskWrapper = document.createElement('div');
  taskWrapper.classList.add('task-wrapper');

  const squareElement = document.createElement('div');
  squareElement.classList.add('square');
  squareElement.innerHTML = 'dblclick';

  taskWrapper.append(squareElement);
  document.body.append(taskWrapper);
};

baseMarkup();

const squareElement = document.querySelector('.square');

const mouseDoubleClick = () => {
  squareElement.classList.toggle('active');
};

squareElement.addEventListener('dblclick', mouseDoubleClick);

// WARN: do not remove this line
module.exports = baseMarkup;
