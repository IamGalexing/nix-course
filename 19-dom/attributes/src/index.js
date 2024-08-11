const baseMarkup = () => {
  document.body.insertAdjacentHTML(
    'afterbegin',
    '<div class="task-wrapper"><p>Choose type of Gas:</p><input type="text" class="input"><div><button class="gas" data="1.2">A92</button><button class="gas" data="1.5">A95</button><button class="gas" data="2.0">A98</button></div><div class="out"></div></div>'
  );
};

baseMarkup();

const getPrice = (event) => {
  const out = document.querySelector('.out');
  const inputValue = document.querySelector('.input').value;
  const multiplyValue = event.target.attributes.data.value;
  out.textContent = `Total price: ${inputValue * multiplyValue}`;
};

document.querySelectorAll('.gas').forEach((item) => item.addEventListener('click', getPrice));

// WARN: do not remove this line
module.exports = baseMarkup;
