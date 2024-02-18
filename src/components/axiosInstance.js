import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api', // Use the relative path for the proxy server
});

export default axiosInstance;