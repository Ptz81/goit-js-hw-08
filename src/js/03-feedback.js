import throttle from 'lodash.throttle';

//знайти елементи
const formElement = document.querySelector('.feedback-form');
const email = formElement[0];
const message = formElement[1];

const LOCALSTORAGE_KEY = 'feedback-form-state';

const currentData = {};


formElement.addEventListener('input', throttle(inputElementStorage, 500))
formElement.addEventListener('submit', handleFormSubmit);

reproductionForm();

function inputElementStorage(e) {
  currentData[e.target.name] = e.target.value.trim();
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(currentData));

}


function handleFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);

}

function reproductionForm() {

  const parseData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

  if (parseData) {
    email.value = parseData.email || '';;
    message.value = parseData.message || '';;
  }
}


