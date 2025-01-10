import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Request Interceptor
apiClient.interceptors.request.use((config) => {
  // If the data is a FormData instance, set Content-Type to 'multipart/form-data'
  if (config.data instanceof FormData) {
    config.headers['Content-Type'] = 'multipart/form-data';
  } else {
    // Otherwise, set Content-Type to 'application/json'
    config.headers['Content-Type'] = 'application/json';
  }

  return config;
}, (error) => {
  return Promise.reject(error);
});

export default apiClient;
