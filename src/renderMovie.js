export { renderMovieMarkup };
const movie = document.querySelector('.render__movie');

function renderMovieMarkup(movie) {
    const markup = movie.map(mov => {
        console.log(mov);
        const { Poster, Title, Year } = mov;
        return `<div class="container__movie">
        <img src="${Poster}"></img>
        <p>${Title}</p>
        <p>${Year}</p>
        </div>`;
    }).join('');
  movie.insertAdjacentHTML('beforeend', markup);
}
