
export { fethcMovie };

function fethcMovie() {

    const URL_API = 'http://www.omdbapi.com/';
    const API_KAY = '?apikey=[ee18fa1e]';

    fetch(`${URL_API}${API_KAY}`);

    return Response.data;

}


console.log(fethcMovie());