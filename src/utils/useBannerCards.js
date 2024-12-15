import { useQuery, useMutation, useQueryClient } from 'react-query';
import { fetchBannerCards, createBannerCard, updateBannerCard, deleteBannerCard } from '../utils/api';

export const useBannerCards = () => {
  return useQuery('bannerCards', fetchBannerCards);
};

export const useCreateBannerCard = () => {
  const queryClient = useQueryClient();
  return useMutation(createBannerCard, {
    onSuccess: () => {
      queryClient.invalidateQueries('bannerCards');
    },
  });
};

export const useUpdateBannerCard = (id) => {
  const queryClient = useQueryClient();
  return useMutation((data) => updateBannerCard(id, data), {
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