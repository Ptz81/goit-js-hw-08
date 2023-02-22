import throttle from 'lodash.throttle';

//знайти елементи
const formElement = document.querySelector('.feedback-form');
const email = formElement[0];
const message = formElement[1];

const LOCALSTORAGE_KEY = 'feedback-form-state';


//слухач подій на кнопку та форму

formElement.addEventListener('input', throttle(inputElementStorage, 500))
formElement.addEventListener('submit', handleFormSubmit);

reproductionForm();

//функція, яка приймає дані з форми і зберігає дані з локальне сховище
function inputElementStorage(e) {
  const currentData = { email: email.value, message: message.value };

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(currentData));

}

//функція на сабміт - забороняє перевантажувати сторінку, контроль введених даних, очищає форму, звільняє сховище
function handleFormSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;

  if (!form.email.value.trim() || !form.message.value.trim()) {
    return alert('Please fill in all the fields in form!')
  }

   e.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);

}

//функція, яка витягує дані зі сховища при перезагрузці сторінки
function reproductionForm() {

  const parseData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

  if (parseData) {
    email.value = parseData.email || '';
    message.value = parseData.message || '';
  }
}


