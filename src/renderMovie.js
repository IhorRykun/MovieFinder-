const movie = document.querySelector('.render__movie');

function renderMovieMarkup(movieFilm) {
  const markup = movieFilm
    .map(mov => {
      console.log(mov);
      const { Poster, Title, Year } = mov;
      if (Poster === 'N/A') {
        return `<li class="list__movie">
        <img class="render__img" src="https://opuswine.ru/wp-content/uploads/2021/01/plenka-1.jpg">
        <p class="render__text">${Title} <span class="render-span--decoration">|</span><span class="render-span--year">${Year}</span></p></img>
        </li>`;
      }
      return `<li class="list__movie">
        <img class="render__img" src="${Poster}">
        <p class="render__text">${Title} <span class="render-span--decoration">|</span><span class="render-span--year">${Year}</span></p></img>
        </li>`;
    })
    .join('');
  movie.insertAdjacentHTML('beforeend', markup);
}

export default renderMovieMarkup;

