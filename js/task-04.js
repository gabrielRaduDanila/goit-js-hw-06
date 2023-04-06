const counter = document.getElementById('value');
const btns = [...document.querySelectorAll('[data-action]')];
let counterValue = 0;

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.dataset.action === 'decrement') {
      counterValue--;
    } else {
      counterValue++;
    }
    displayCOunter();
  });
});

function displayCOunter() {
  counter.innerHTML = counterValue;
}
