import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const gallery = document.querySelector('.gallery');
  if (!gallery) return;

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
          <p>❤️ ${likes}</p>
          <p>👀 ${views}</p>
          <p>💬 ${comments}</p>
          <p>⬇️ ${downloads}</p>
        </div>
      </li>
    `
    )
    .join('');

  gallery.innerHTML = markup;

  lightbox.refresh();
}

export function clearGallery() {
  const gallery = document.querySelector('.gallery');
  if (!gallery) return;

  gallery.innerHTML = '';
}

export function showLoader() {
  const loader = document.querySelector('.loader');
  if (!loader) return;

  loader.classList.add('active');
}

export function hideLoader() {
  const loader = document.querySelector('.loader');
  if (!loader) return;

  loader.classList.remove('active');
}
