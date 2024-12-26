import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchTestimonies, removeTestimony } from '../utils/api.js';
import handleError from '../utils/errorHandler.js';
import { useSetRecoilState } from 'recoil';
import { testimoniesState } from '../state/state.js';

export const useTestimonies = () => {
  const setTestimonies = useSetRecoilState(testimoniesState);

  return useQuery('testimonies', fetchTestimonies, {
    onSuccess: (data) => {
      setTestimonies(data);
    },
    onError: handleError,
  });
};

export const useRemoveTestimony = () => {
  const queryClient = useQueryClient();
  return useMutation(removeTestimony, {
    onSuccess: () => {
      queryClient.invalidateQueries('testimonies');
    },
    onError: handleError,
  });
};