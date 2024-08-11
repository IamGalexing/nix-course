/* eslint-disable no-undef */
const baseMarkup = () => {
  document.body.insertAdjacentHTML(
    'afterbegin',
    '<div class="task-wrapper"><p>Type symbols below:</p><input type="text" class="input"><div class="out"></div></div>'
  );
};

baseMarkup();

const getLowerCaseSymbol = (e) => {
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    e.preventDefault();
  } else {
    e.target.textContent += e.key;
  }
};

document.querySelector('.input').addEventListener('keypress', getLowerCaseSymbol);

// WARN: do not remove this line
module.exports = baseMarkup;
