import axios from 'axios';

export default class NewApiMovieService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fethcMovie() {
    const URL_API = 'http://www.omdbapi.com/';
    const API_KAY = 'ee18fa1e';
    const response = await axios.get(
      `${URL_API}?apikey=${API_KAY}&type=movie&page=${this.page}&s=${this.searchQuery}`
      );
      console.log(response.data);
    return response.data;
  }

  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
