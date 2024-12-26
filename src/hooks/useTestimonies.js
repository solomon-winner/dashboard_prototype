import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchTestimonies, removeTestimony } from '../utils/api.js';
import handleError from '../utils/errorHandler.js';
import { useSetRecoilState } from 'recoil';
import { testimoniesState } from '../state/state.js';

export const useTestimonies = () => {
  const setTestimonies = useSetRecoilState(testimoniesState);

  return useQuery({
    queryKey: ['testimonies'],  
    queryFn: fetchTestimonies,
    onSuccess: (data) => {
      setTestimonies(data);
    },
    onError: handleError,
  });
};

export const useRemoveTestimony = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: removeTestimony,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['testimonies'] });  // v5 syntax
    },
    onError: handleError,
  });
};
