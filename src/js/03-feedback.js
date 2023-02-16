import throttle from 'lodash.throttle';

//знайти елементи
const formElement = document.querySelector('.feedback-form');
// const email = formElement[0];
// const message = formElement[1];
const LOCALSTORAGE_KEY = 'feedback-form-state';
// const storedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
const currentData = {};
// console.log(currentData)


formElement.addEventListener('input', throttle(inputElementStorage, 500))
formElement.addEventListener('submit', handleFormSubmit);

function inputElementStorage(e) {
  currentData[e.target.name] = e.target.value.trim();
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(currentData));
  
}


function handleFormSubmit(event) {
  event.preventDefault();
  const storedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  console.log(storedData);

  formElement.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);

}

// function serializeForm() {

//   if (true) {
//     currentData.email.value = storedData.email;
//     currentData.message.value = storedData.message;
//   }
// }


