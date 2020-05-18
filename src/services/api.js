import axios from 'axios';

const baseUrl = 'https://api.hgbrasil.com/';
const api = axios.create({
  baseURL: baseUrl,
});

export default api;
