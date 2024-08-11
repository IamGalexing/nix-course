const baseMarkup = () => {
  const taskWrapper = document.createElement('div');
  taskWrapper.classList.add('task-wrapper');

  const squareElement = document.createElement('div');
  squareElement.classList.add('square', 'active');
  squareElement.innerHTML = 'MouseClick';

  const outElement = document.createElement('div');
  outElement.classList.add('out');

  taskWrapper.append(squareElement);
  document.body.append(taskWrapper);
  document.body.append(outElement);
};

baseMarkup();

const squareElement = document.querySelector('.square');
const width = 75;

const mouseClick = () => {
  const outElement = document.querySelector('.out');

  const currentWidth = parseInt(squareElement.style.width, 10) || width;
  const updatedWidth = currentWidth + 5;

  squareElement.style.width = `${updatedWidth}px`;
  outElement.innerHTML = updatedWidth;
};

squareElement.addEventListener('click', mouseClick);

// WARN: do not remove this line
module.exports = baseMarkup;
