/* eslint-disable no-undef */
const createDiv = (className, title) => {
  const div = document.createElement('div');
  div.classList.add(className);
  div.innerHTML = title;

  return div;
};

const baseMarkup = () => {
  const taskWrapper = document.createElement('div');
  taskWrapper.classList.add('task-wrapper');
  taskWrapper.append(
    createDiv('out', 'block - 1'),
    createDiv('out', 'block - 2'),
    createDiv('out', 'block - 3'),
    createDiv('out', 'block - 4')
  );

  const button = document.createElement('button');
  button.classList.add('btn');
  button.innerHTML = 'Toggle classes';

  taskWrapper.append(button);
  document.body.append(taskWrapper);
};

baseMarkup();

const customToggle = () => {
  const allDiv = document.querySelectorAll('.out');

  allDiv.forEach((item) => {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
    } else {
      item.classList.add('active');
    }
  });
};

document.querySelector('.btn').addEventListener('click', customToggle);

// WARN: do not remove this line
module.exports = baseMarkup;
