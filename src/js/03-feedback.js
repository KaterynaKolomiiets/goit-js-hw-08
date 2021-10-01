import lodash from 'lodash.throttle';

const emailEl = document.querySelector("input[name='email']");
const passwordEl = document.querySelector("textarea[name='message']");
const formEl = document.querySelector('.feedback-form');

const onInput = function () {
  const formState = {
    email: `${emailEl.value}`,
    password: `${passwordEl.value}`,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
};

const onSubmit = function (e) {
  e.preventDefault();
  const parsedStorage = JSON.parse(localStorage.getItem('feedback-form-state')) ?? "Local storage is empty";
  // localStorage.clear()
  localStorage.removeItem('feedback-form-state');
  formEl.reset();
  console.log(parsedStorage);
};

formEl.addEventListener('input', lodash(onInput, 5000));
formEl.addEventListener('submit', onSubmit);
window.onload = function () {
  const parsedStorage = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (!parsedStorage) {
    emailEl.value = '';
    passwordEl.value = '';
  } else {
    emailEl.value = parsedStorage.email;
    passwordEl.value = parsedStorage.password;
  }
};