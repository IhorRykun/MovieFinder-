
export { fethcMovie };

function fethcMovie() {

    const URL_API = 'http://www.omdbapi.com/';
    const API_KAY = 'ee18fa1e';

   fetch(`${URL_API}?apikey=${API_KAY}&type=movie&page=1`);

    return Response.data;

}