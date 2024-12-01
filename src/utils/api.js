import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const api = axios.create({
  baseURL: process.env.API_URL || "http://localhost:5000",
});

const incrementVisitorCount = async () => {
   const response =  await axios.post('/api/visitors/increment');
    return response.data;
};
const fetchMenus = async () => {
  const response = await api.get('/api/menus');
  return response.data;
};

const fetchMenuById = async (id) => {
  const response = await api.get(`/api/menus/${id}`);
  return response.data;
};

const createMenu = async (menu) => {
  const response = await api.post('/api/menus', menu);
  return response.data;
};

const updateMenu = async (menuItem) => {
  const response = await api.put(`/api/menus/${menuItem.id}`, { name: menuItem.name });
  return response.data;
};

const deleteMenu = async (id) => {
  const response = await api.delete(`/api/menus/${id}`);
  return response.data;
};

export const useIncrementVisitor = () => {
  return useQuery({
    queryKey: 'incrementVisitorCount',
    queryFn: fetchMenus,
  });
};

export const useMenus = () => {
  return useQuery({
    queryKey: 'menus',
    queryFn: fetchMenus,
  });
};

export const useMenuById = (id) => {
  return useQuery({
    queryKey: ['menu', id],
    queryFn: () => fetchMenuById(id),
  });
};

export const useCreateMenu = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createMenu,
    onSuccess: () => {
      queryClient.invalidateQueries('menus');
    },
  });
};

export const useUpdateMenu = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateMenu,
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