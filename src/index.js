import fethcMovie from './apiServer';

const form = document.querySelector('.form__search');

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();
    const inputSearch = e.currentTarget.elements.search.value;
    fethcMovie();
}


