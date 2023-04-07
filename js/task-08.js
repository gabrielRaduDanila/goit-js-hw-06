const loginForm = document.querySelector('.login-form');

class InputsValues {
  constructor(email, password) {
    this.email = email.value;
    this.password = password.value;
  }
}

const eventHandler = (e) => {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;

  console.log(email.name, password.name);

  if (email.value === '' || password.value === '') {
    alert('Please fill in all the fields!');
  } else {
    const formValues = new InputsValues(email, password);
    console.log(formValues);
    loginForm.reset();
  }
};

loginForm.addEventListener('submit', eventHandler);
