import apiClient from './apiClient';

export const login = async () => {
  const response = await apiClient.get('/authentication');
  return response.data;
};

export const register = async () => {
  const response = await apiClient.get('/authentication');
  return response.data;
};

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

export const fetchMessages = async () => {
  const response = await apiClient.get('/messages');
  return response.data;
};
export const addMessages = async () => {
  const response = await apiClient.post('/messages');
  return response.data;
};
export const updateMessage = async () => {
  const response = await apiClient.put(`/messages/${id}`);
  return response.data;
};
export const fetchOneMessage = async () => {
  const response = await apiClient.get(`/messages${id}`);
  return response.data;
};
export const removeMessage = async () => {
  const response = await apiClient.delete(`/messages${id}`);
  return response.data;
};

export const fetchSongs = async () => {
  const response = await apiClient.get('/songs');
  return response.data;
};
export const addSongs = async () => {
  const response = await apiClient.post('/songs');
  return response.data;
};
export const updateSong = async () => {
  const response = await apiClient.put(`/songs/${id}`);
  return response.data;
};
export const fetchOneSong = async () => {
  const response = await apiClient.get(`/songs${id}`);
  return response.data;
};
export const removeSong = async () => {
  const response = await apiClient.delete(`/songs${id}`);
  return response.data;
};

export const addSubscriber = async () => {
  const response = await apiClient.post('/subscribers');
  return response.data;
};

export const fetchSubscribers = async () => {
  const response = await apiClient.get('/subscribers');
  return response.data;
};

export const removeSubscriber = async () => {
  const response = await apiClient.delete(`/subscribers${id}`);
  return response.data;
};
export const  addVisitors = async () => {
  const response = await apiClient.post('/visitors');
  return response.data;
};
