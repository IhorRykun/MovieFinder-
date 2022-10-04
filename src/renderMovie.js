const movie = document.querySelector('.render__movie');

export { renderMovieMarkup };

function renderMovieMarkup(movie) {
    const markup = movie.map(mov => {
        const { Poster, Title, Year } = mov;

        return `<div class=""></div>`;
    });
}