import throttle from 'lodash.throttle';

//знайти елементи
const formElement = document.querySelector('.feedback-form');
// const currentData = localStorage.getItem('feedback-form-state');

formElement.addEventListener('input', throttle(inputElementStorage, 500))

formElement.addEventListener('submit', handleFormSubmit);

function inputElementStorage(e) {
localStorage.setItem('feedback-form-state', e.target.name);
}

function serializeForm(formNode) {
  const { elements } = formNode

  const data = Array.from(elements)
    .filter((item) => !!item.name)
    .map((element) => {
      const { name, value } = element

      return { name, value }
    })

  console.log(data)
}

// Просимо форму не відправляти данні самостійно та поведінка для submit
function handleFormSubmit(event) {

  event.preventDefault()
  serializeForm(formElement)
}
