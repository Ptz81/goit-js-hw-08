import throttle from 'lodash.throttle';

//знайти елемент
const formElement = document.querySelector('.feedback-form');


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


function handleFormSubmit(event) {
  // Просимо форму не відправляти данні самостійно
  event.preventDefault()
  serializeForm(formElement)
}

formElement.addEventListener('submit', handleFormSubmit);



formElement.addEventListener('input', (e) => {
  localStorage.setItem('feedback-form-state', e.target);
})

// змінна, яка витягає дані з Локального сховища
const currentData = localStorage.getItem('feedback-form-state');