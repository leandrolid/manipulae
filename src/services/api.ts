import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://cors-leandrolid.herokuapp.com',
});
