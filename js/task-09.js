function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  bodyEl: document.querySelector('body'),
  btnEl: document.querySelector('.change-color'),
  valueColorEl: document.querySelector('.color'),
};

refs.btnEl.addEventListener('click', changeBodyColor);

function changeBodyColor() {
  const bgColor = getRandomHexColor();
  refs.bodyEl.style.backgroundColor = bgColor;
  refs.valueColorEl.textContent = bgColor;
}