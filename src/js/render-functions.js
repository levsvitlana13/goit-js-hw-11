
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const loaderElement = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="gallery-item">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes</b><span>${likes}</span></p>
          <p><b>Views</b><span>${views}</span></p>
          <p><b>Comments</b><span>${comments}</span></p>
          <p><b>Downloads</b><span>${downloads}</span></p>
        </div>
      </li>
    `
    )
    .join('');

  galleryContainer.innerHTML = markup;

  lightbox.refresh();
}

export function clearGallery() {
  if (galleryContainer) {
    galleryContainer.innerHTML = '';
  }
}

export function showLoader() {
  if (loaderElement) {
    loaderElement.classList.add('active'); 
  }
}

export function hideLoader() {
  if (loaderElement) {
    loaderElement.classList.remove('active');
  }
}
