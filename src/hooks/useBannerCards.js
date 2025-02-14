import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchBannerCards, createBannerCard, updateBannerCard, deleteBannerCard } from '../utils/api.js';

export const useBannerCards = () => {
  return useQuery({
    queryKey: ["bannerCards"], 
    queryFn: fetchBannerCards,
  });
};


export const useCreateBannerCard = () => {
  const queryClient = useQueryClient();
  return useMutation(createBannerCard, {
    onSuccess: () => {
      queryClient.invalidateQueries('bannerCards');
    },
  });
};

export const useUpdateBannerCard = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (_id, data) => updateBannerCard(_id, data),
    onSuccess: () => {
      queryClient.invalidateQueries('bannerCards');
    },
  });
};

export const useDeleteBannerCard = (id) => {
  const queryClient = useQueryClient();
  return useMutation(() => deleteBannerCard(id), {
    onSuccess: () => {
      queryClient.invalidateQueries('bannerCards');
    },
  });
};