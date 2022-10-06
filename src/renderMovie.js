export { renderMovieMarkup };
const movie = document.querySelector('.render__movie');

function renderMovieMarkup(movie) {
    const markup = movie.map(mov => {
      console.log(mov);
      const { Poster, Title, Year } = mov;
      return `<div class="render__movie">
        <img class="render__img" src="${Poster}"></img>
        <p class="render__text">${Title}</p>
        <p class="render__text">${Year}</p>
        </div>`;
    }).join('');
  movie.insertAdjacentHTML('beforeend', markup);
}
