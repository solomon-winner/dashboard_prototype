import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const api = axios.create({
  baseURL: process.env.API_URL || "http://localhost:5000",
});

const incrementVisitorCount = async () => {
   const response =  await axios.post('/api/visitors/increment');
    return response.data;
};
const fetchbannerCards = async () => {
  const response = await api.get('/api/bannercards');
  return response.data;
};

const bannerCardsById = async (id) => {
  const response = await api.get(`/api/bannercards/${id}`);
  return response.data;
};

const createBannercards = async (bannercards) => {
  const response = await api.post('/api/bannercards', bannercards);
  return response.data;
};

const updatebannercards = async (bannercards) => {
  const response = await api.put(`/api/bannercards/${bannercards.id}`, { name: bannercards.name });
  return response.data;
};

const deleteMenu = async (id) => {
  const response = await api.delete(`/api/menus/${id}`);
  return response.data;
};

export const useIncrementVisitor = () => {
  return useQuery({
    queryKey: 'incrementVisitorCount',
    queryFn: incrementVisitorCount,
  });
};

export const useMenus = () => {
  return useQuery({
    queryKey: 'bannerCards',
    queryFn: fetchbannerCards,
  });
};

export const useMenuById = (id) => {
  return useQuery({
    queryKey: ['menu', id],
    queryFn: () => bannerCardsById(id),
  });
};

export const useCreateBannercards = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createBannercards,
    onSuccess: () => {
      queryClient.invalidateQueries('menus');
    },
  });
};

export const useUpdatebannercards = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updatebannercards,
    onSuccess: () => {
      queryClient.invalidateQueries('menus');
    },
  });
};

export const useDeleteMenu = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteMenu,
    onSuccess: () => {
      queryClient.invalidateQueries('menus');
    },
  });
};