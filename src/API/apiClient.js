import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://api.weatherapi.com/v1/',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default axiosClient
