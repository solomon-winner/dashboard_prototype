import apiClient from './apiClient.js';
import handleError from './errorHandler.js';

// Authentication
export const login = async (logiData) => {
  try {
    const response = await apiClient.post('/authentication/login', logiData);
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const register = async (SignUpData) => {
  try {
    const response = await apiClient.post('/authentication/register',SignUpData);
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const fetchGeneralInfo = async () => {
  try {
    const response = await apiClient.get('/general');
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const addGeneralInfo = async (data) => {
  try {
    const response = await apiClient.post('/general', data);
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const updateGeneralInfo = async (data) => {
  try {
    const response = await apiClient.put('/general', data);
    console.log("This is from API:",data,response)
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

// export const deleteGeneralInfo = async (id) => {
//   try {
//     const response = await apiClient.delete(`/general/${id}`);
//     return response.data;
//   } catch (error) {
//     handleError(error);
//     throw error;
//   }
// };

// Banner Cards
export const fetchBannerCards = async () => {
  try {
    const response = await apiClient.get('/bannercards');
    return response.data.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const createBannerCard = async (data) => {
  try {
    const response = await apiClient.post('/bannercards', data);
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const updateBannerCard = async (id, data) => {
  try {
    const response = await apiClient.put(`/bannercards/${id}`, data);
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const deleteBannerCard = async (id) => {
  try {
    const response = await apiClient.delete(`/bannercards/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

// Messages
export const fetchMessages = async () => {
  try {
    const response = await apiClient.get('/messages');
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const addMessages = async (data) => {
  try {
    const response = await apiClient.post('/messages', data);
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const updateMessage = async (id, data) => {
  try {
    const response = await apiClient.put(`/messages/${id}`, data);
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const fetchOneMessage = async (id) => {
  try {
    const response = await apiClient.get(`/messages/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const removeMessage = async (id) => {
  try {
    const response = await apiClient.delete(`/messages/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

// Songs
export const fetchSongs = async (type) => {
  try {
    const response = await apiClient.get(`/songs?type=${type}`);
    return response.data.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const addSongs = async (data) => {
  try {
    const response = await apiClient.post('/songs', data);
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const updateSong = async (id, data) => {
  try {
    const response = await apiClient.put(`/songs/${id}`, data);
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const fetchOneSong = async (id) => {
  try {
    const response = await apiClient.get(`/songs/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const removeSong = async (id) => {
  try {
    const response = await apiClient.delete(`/songs/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

// Subscribers
export const addSubscriber = async (data) => {
  try {
    const response = await apiClient.post('/subscribers', data);
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const fetchSubscribers = async () => {
  try {
    const response = await apiClient.get('/subscribers');
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const removeSubscriber = async (id) => {
  try {
    const response = await apiClient.delete(`/subscribers/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

// Visitors
export const addVisitors = async (data) => {
  try {
    const response = await apiClient.post('/visitors', data);
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

// Testimonies
export const fetchTestimonies = async () => {
  try {
    const response = await apiClient.get('/testimonies');
    return response.data.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const addTestimony = async (data) => {
  try {
    const response = await apiClient.post('/testimonies', data);
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const updateTestimonies = async (id, data) => {
  try {
    const response = await apiClient.put(`/testimonies/${id}`, data);
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const fetchOneTestimony = async (id) => {
  try {
    const response = await apiClient.get(`/testimonies/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const removeTestimony = async (id) => {
  try {
    const response = await apiClient.delete(`/testimonies/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};