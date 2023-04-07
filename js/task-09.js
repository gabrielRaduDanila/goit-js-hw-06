const changeColorBtn = document.querySelector('.change-color');
const displayColorValue = document.querySelector('.color');
const body = document.body;

const eventHandler = () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  displayColorValue.innerHTML = color;
};

window.addEventListener('DOMContentLoaded', eventHandler);
changeColorBtn.addEventListener('click', eventHandler);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
