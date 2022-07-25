function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  amount: 0,
  inputEl: document.querySelector('input[type="number"]'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  collectionEl: document.querySelector('#boxes'),
};

refs.inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  refs.amount = event.currentTarget.value;
}

refs.createBtn.addEventListener('click', createBoxes);

function createBoxes() {
  const arrayFromAmount = [];

  for (let i = 0; i < +refs.amount; i += 1) {
    const elementCollection = document.createElement('div');
    const sizeValue = 30 + i * 10;
    elementCollection.style.width = `${sizeValue}px`;
    elementCollection.style.height = `${sizeValue}px`;
    elementCollection.style.backgroundColor = getRandomHexColor();
    arrayFromAmount.push(elementCollection);
  }

  refs.collectionEl.append(...arrayFromAmount);
}

refs.destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  refs.collectionEl.innerHTML = '';
}