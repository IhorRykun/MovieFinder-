import NewApiMovieService from './apiServer';
import renderMovieMarkup from './renderMovie';
import scroll from './scroll';

const movieGallery = new NewApiMovieService();

const form = document.querySelector('.form__search');
const movie = document.querySelector('.render__movie');
const containerScroll = document.querySelector('.container__scroll');

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();
  movieGallery.query = e.currentTarget.elements.search.value;
  if (movieGallery.query === '') {
    alert('Введіть назву фільму');
  }
  fethcMovie();
  registerIntersetObserv();
  movie.innerHTML = '';
}

async function fethcMovie() {
  const response = await movieGallery.fethcMovie();
  const search = response.Search;
  if (search === response.false) {
    alert('Такого фільма не знайдено');
  }
  await renderMovieMarkup(search);
}

function registerIntersetObserv() {
  const onEntry = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && movieGallery.query !== '') {
        movieGallery.incrementPage();
        fethcMovie();
      }
    });
  };
  const options = {
    rootMargin: '960px',
  };

  const observe = new IntersectionObserver(onEntry, options);
  observe.observe(containerScroll);
}
