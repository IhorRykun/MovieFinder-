const movie = document.querySelector('.render__movie');

function renderMovieMarkup(movie) {
    const markup = movie.map(mov => {
        const { Poster, Title, Year } = mov;

        return `<div class=""></div>`;
    });
}