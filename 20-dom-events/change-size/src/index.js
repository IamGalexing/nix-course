/* eslint-disable no-undef */
const baseMarkup = () => {
  document.body.insertAdjacentHTML(
    'afterbegin',
    '<div class="task-wrapper"><p>Change size</p><input type="text" class="input"><div class="square"></div><p class="width-output">width: 85</p><p class="height-output">height: 85</p></div>'
  );
};

baseMarkup();

let height = 85;
let width = 85;

const changeSize = ({ code }) => {
  const square = document.querySelector('.square');

  if (code === 'ArrowRight' || code === 'ArrowLeft') {
    width += 1;
    square.style.width = `${width}px`;
    document.querySelector('.width-output').textContent = `width: ${width}`;
  } else if (code === 'ArrowUp' || code === 'ArrowDown') {
    height += 1;
    square.style.height = `${height}px`;
    document.querySelector('.height-output').textContent = `height: ${height}`;
  }
};

document.querySelector('.input').addEventListener('keydown', changeSize);

// WARN: do not remove this line
module.exports = baseMarkup;
