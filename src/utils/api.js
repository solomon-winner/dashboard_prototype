import apiClient from './apiClient';

// General Info
export const fetchGeneralInfo = async () => {
  const response = await apiClient.get('/general-info');
  return response.data;
};

export const updateGeneralInfo = async (data) => {
  const response = await apiClient.put('/general-info', data);
  return response.data;
};

// Banner Cards
export const fetchBannerCards = async () => {
  const response = await apiClient.get('/banner-cards');
  return response.data;
};

export const createBannerCard = async (data) => {
  const response = await apiClient.post('/banner-cards', data);
  return response.data;
};

export const updateBannerCard = async (id, data) => {
  const response = await apiClient.put(`/banner-cards/${id}`, data);
  return response.data;
};

export const deleteBannerCard = async (id) => {
  const response = await apiClient.delete(`/banner-cards/${id}`);
  return response.data;
};

