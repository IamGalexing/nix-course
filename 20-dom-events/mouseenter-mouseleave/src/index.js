/* eslint-disable no-unused-expressions */
const baseMarkup = () => {
  document.body.insertAdjacentHTML(
    'afterbegin',
    '<div class="task-wrapper"><div class="block square"><img class="img" alt="task-img" src="img/1.png"></img></div></div>'
  );
};

baseMarkup();

const img = document.querySelector('.img');

const setImageOnMouseHover = () => {
  img.attributes.src.value === 'img/1.png'
    ? img.setAttribute('src', 'img/2.png')
    : img.setAttribute('src', 'img/1.png');
};

img.addEventListener('mouseenter', setImageOnMouseHover);
img.addEventListener('mouseleave', setImageOnMouseHover);

// WARN: do not remove this line
module.exports = baseMarkup;
