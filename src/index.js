import { functions } from 'lodash';
import fethcMovie from './apiServer';

const form = document.querySelector('from__search');

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.priventDefault();
  const inputSearch = e.currentTarget.elements.text;
  console.dir(inputSearch);
}
