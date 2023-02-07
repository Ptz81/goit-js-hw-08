import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Описаний в документації

// Change code below this line


//знайти
const gallery = document.querySelector('.gallery')
//розмітка у змінній
const newElement = createElem(galleryItems);
//додати розмітку після галереї
gallery.insertAdjacentHTML('beforeend', newElement);

//функція рендеру масиву обєктів та створення розмітки
  function createElem(item){
    return item.map(({ preview, original, description })=>{
        return `<li>
      <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`
  }).join('');
  }

// var lightbox = $('.gallery a').simpleLightbox({
//     captionsData: 'alt',
//     captionPosition: 'bottom',
//     captionDelay: 250
//  });


const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250
 });

console.log(galleryItems);
