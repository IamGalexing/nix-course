const baseMarkup = () => {
  const base = document.createElement('div');
  base.classList.add('base');

  const middleBlock = document.createElement('div');
  middleBlock.classList.add('block', 'middle');
  middleBlock.innerHTML = 'Middle';

  const button = document.createElement('button');
  button.classList.add('btn');
  button.innerHTML = 'change markup';

  base.append(middleBlock);
  document.body.append(base);
  document.body.append(button);
};

baseMarkup();

const changeMarkup = () => {
  const baseDiv = document.querySelector('.base');

  baseDiv.insertAdjacentHTML('beforebegin', '<div class="block before">before</div>');
  baseDiv.insertAdjacentHTML('afterbegin', '<div class="block prepend">prepend</div>');
  baseDiv.insertAdjacentHTML('beforeend', '<div class="block append">append</div>');
  baseDiv.insertAdjacentHTML('afterend', '<div class="block after">after</div>');
};

document.querySelector('.btn').addEventListener('click', changeMarkup);

module.exports = { baseMarkup };
