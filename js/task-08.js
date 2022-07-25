const form = {
  formEl: document.querySelector('.login-form'),
  inputEmailEl: document.querySelector('input[type="email"]'),
  inputPasswordEl: document.querySelector('input[type="password"]'),
};

form.formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  if (!form.inputEmailEl.value || !form.inputPasswordEl.value) {
    alert('All fields should be filled!');
  } else {
    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => {
      console.log(name);
      console.log(value);
    });
    form.formEl.reset();
  }
}
