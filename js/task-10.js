const btns = document.querySelectorAll('button');
const boxesContainer = document.querySelector('#boxes');
const valueInput = document.querySelector('#controls input');

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.dataset.create === '') {
      let amount = valueInput.value;
      amount = Number(amount);
      createBoxes(amount);
    } else {
      boxesContainer.innerHTML = '';
      valueInput.value = '';
    }
  });
});

function createBoxes(amount) {
  boxesContainer.innerHTML = '';
  let sideSize = 30;
  for (let i = 0; i < amount; i++) {
    createBox(sideSize);
    sideSize += 10;
  }
}

function createBox(sideSize) {
  const div = document.createElement('div');
  div.style.backgroundColor = getRandomHexColor();
  div.style.height = `${sideSize}px`;
  div.style.width = `${sideSize}px`;
  boxesContainer.appendChild(div);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
