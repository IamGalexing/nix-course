const baseMarkup = () => {
  const taskWrapper = document.createElement('div');
  taskWrapper.classList.add('task-wrapper');

  const squareElement = document.createElement('div');
  squareElement.classList.add('square');
  squareElement.innerHTML = '1';

  taskWrapper.append(squareElement);
  document.body.append(taskWrapper);
};

baseMarkup();

const squareElement = document.querySelector('.square');
let count = 1;

const increasePoint = () => {
  count += 1;
  squareElement.textContent = count;
};

squareElement.addEventListener('mousemove', increasePoint);

module.exports = baseMarkup;
