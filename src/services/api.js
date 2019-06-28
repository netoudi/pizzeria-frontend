import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URL || 'http://0.0.0.0:3333',
});

export default api;
