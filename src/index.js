import NewApiMovieService from './apiServer';

const movieGallery = new NewApiMovieService();

const form = document.querySelector('.form__search');

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
    e.preventDefault();
    movieGallery.query = e.currentTarget.elements.search.value;
    if (movieGallery.query === "") {
        alert('Вибачте, ведіть назву фільму');
    }
     movieGallery.fethcMovie();
}

