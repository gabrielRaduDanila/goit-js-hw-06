const loginForm = document.querySelector('.login-form');

// class InputsValues {
//   constructor(email, password) {
//     this.email = email.value;
//     this.password = password.value;
//   }
// }

const eventHandler = (e) => {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === '' || password.value === '') {
    alert('Please fill in all the fields!');
  } else {
    const formValues = {
      [email.name]: email.value,
      [password.name]: password.value,
    };
    console.log(formValues);
    loginForm.reset();
  }
};

loginForm.addEventListener('submit', eventHandler);
