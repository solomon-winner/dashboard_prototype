import apiClient from './apiClient';

export const fetchGeneralInfo = async () => {
  const response = await apiClient.get('/general');
  return response.data;
};

export const updateGeneralInfo = async (data) => {
  const response = await apiClient.put('/general', data);
  return response.data;
};


export const fetchBannerCards = async () => {
  const response = await apiClient.get('/bannercards');
  return response.data;
};

export const createBannerCard = async (data) => {
  const response = await apiClient.post('/bannercards', data);
  return response.data;
};

export const updateBannerCard = async (id, data) => {
  const response = await apiClient.put(`/bannercards/${id}`, data);
  return response.data;
};

export const deleteBannerCard = async (id) => {
  const response = await apiClient.delete(`/bannercards/${id}`);
  return response.data;
};

