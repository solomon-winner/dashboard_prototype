import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchTestimonies, removeTestimony, updateTestimonies } from '../utils/api.js';
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

// Update Testimony Hook
export const useUpdateTestimony = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ id, data }) => updateTestimonies(id, data),
    retry: 2,  // Retry twice if the mutation fails
  });

  // Invalidate queries on successful mutation
  useEffect(() => {
    if (mutation.isSuccess) {
      queryClient.invalidateQueries({ queryKey: ['testimonies'] });
    }
  }, [mutation.isSuccess, queryClient]);

  // Handle errors
  useEffect(() => {
    if (mutation.isError) {
      console.error('Error updating testimony:', mutation.error.message);
    }
  }, [mutation.isError, mutation.error]);

  return mutation;
};

// Remove Testimony Hook
export const useRemoveTestimony = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id) => removeTestimony(id),
    retry: 2,
  });

  // Invalidate queries on successful mutation
  useEffect(() => {
    if (mutation.isSuccess) {
      queryClient.invalidateQueries({ queryKey: ['testimonies'] });
    }
  }, [mutation.isSuccess, queryClient]);

  // Handle errors
  useEffect(() => {
    if (mutation.isError) {
      console.error('Error removing testimony:', mutation.error.message);
    }
  }, [mutation.isError, mutation.error]);

  return mutation;
};
