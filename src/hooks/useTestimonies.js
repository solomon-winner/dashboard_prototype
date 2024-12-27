import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchTestimonies, removeTestimony } from '../utils/api.js';
import handleError from '../utils/errorHandler.js';
import { useSetRecoilState } from 'recoil';
import { testimoniesState } from '../state/state.js';
import { useEffect } from 'react';

export const useTestimonies = () => {
  const setTestimonies = useSetRecoilState(testimoniesState);

  const { data, isError, isSuccess, isLoading, error } = useQuery({
    queryKey: ['testimonies'],
    queryFn: fetchTestimonies,
    staleTime: 5 * 60 * 1000,  // Cache data for 5 minutes
    refetchOnWindowFocus: false,  // Prevent unnecessary refetch on window focus
    retry: 2,  // Retry twice on failure
  });

  // Handle success (update Recoil state)
  useEffect(() => {
    if (isSuccess && data) {
      setTestimonies(data);
    }
  }, [isSuccess, data, setTestimonies]);

  // Handle errors
  useEffect(() => {
    if (isError) {
      console.error('Fetching testimonies failed:', error.message);
    }
  }, [isError, error]);

  return { data, isLoading, isError };
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
