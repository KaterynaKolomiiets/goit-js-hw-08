import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(SimpleLightbox)

// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line
const galleryEl = document.querySelector('.gallery');

const items = galleryItems
  .map(item => {
    return `<a class="gallery__item" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          alt="${item.description}"
        />`;
  })
  .join('');

galleryEl.insertAdjacentHTML('afterbegin', items);

let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  captionClass: 'caption',
});
gallery.on('show.simplelightbox');
