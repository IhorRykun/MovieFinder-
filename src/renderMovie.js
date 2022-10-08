
const movie = document.querySelector('.render__movie');

function renderMovieMarkup(movieFilm) {
    const markup = movieFilm
      .map(mov => {
        console.log(mov);
        const { Poster, Title, Year } = mov;
        return `<li class="list__movie">
        <img class="render__img" src="${Poster}"></img>
        <p class="render__text">${Title}</p>
        <p class="render__text">${Year}</p>
        </li>`;
      })
      .join('');
  movie.insertAdjacentHTML('beforeend', markup);
}


export default renderMovieMarkup;