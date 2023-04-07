const validationInput = document.getElementById('validation-input');
let inputMinLegth = validationInput.dataset.length;
inputMinLegth = Number(inputMinLegth);

const eventHandler = () => {
  let typedText = validationInput.value;
  if (typedText.length >= inputMinLegth) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  } else {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
};

validationInput.addEventListener('blur', eventHandler);
