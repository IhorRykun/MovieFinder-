import NewApiMovieService from './apiServer';
import renderMovieMarkup from './renderMovie';

const movieGallery = new NewApiMovieService();

const form = document.querySelector('.form__search');
const movie = document.querySelector('.render__movie');

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();
  movieGallery.query = e.currentTarget.elements.search.value;
  if (movieGallery.query === '') {
    alert('Введіть назву фільму');
    }
    fethcMovie();
  movie.innerHTML = '';
}

async function fethcMovie() {
  const response = await movieGallery.fethcMovie();
  const { Search } = response;
}
