const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');
const defaultText = nameOutput.textContent;

const eventHandler = () => {
  let typedValue = nameInput.value;
  typedValue = typedValue.charAt(0).toUpperCase() + typedValue.slice(1);
  if (typedValue !== '') {
    nameOutput.innerHTML = typedValue;
  } else {
    nameOutput.innerHTML = defaultText;
  }
};

nameInput.addEventListener('keyup', eventHandler);
