const sizeControlInput = document.getElementById('font-size-control');
const text = document.getElementById('text');

const eventHandler = () => {
  let sizeControlInputValue = sizeControlInput.value;
  sizeControlInputValue = Number(sizeControlInputValue);
  text.style.fontSize = `${sizeControlInputValue}px`;
};

window.addEventListener('DOMContentLoaded', eventHandler);

sizeControlInput.addEventListener('input', eventHandler);
