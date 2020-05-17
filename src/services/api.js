import axios from 'axios';

const baseUrl = 'https://';
const api = axios.create({
  baseURL: baseUrl,
});

export default api;
