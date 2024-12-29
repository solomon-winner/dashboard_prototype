import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchTestimonies, removeTestimony, updateTestimonies } from '../utils/api.js';
import { useSetRecoilState } from 'recoil';
import { testimoniesState } from '../state/state.js';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

// Fetch Testimonies Hook
export const useTestimonies = () => {
  const setTestimonies = useSetRecoilState(testimoniesState);

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ['testimonies'],
    queryFn: fetchTestimonies,
    staleTime: 5 * 60 * 1000,  // Cache for 5 minutes
    refetchOnWindowFocus: false,
    retry: 2,
  });

  useEffect(() => {
    if (data) {
      setTestimonies(data);
    }
  }, [data, setTestimonies]);

  useEffect(() => {
    if (isError) {
      console.error('Fetching testimonies failed:', error.message);
      toast.error('Failed to load testimonies. Please try again.');
    }
  }, [isError, error]);

  return { data, isLoading, isError };
};

// Reusable Mutation Hook
const useCustomMutation = (mutationFn, successMessage) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn,
    onMutate: async (newData) => {
      await queryClient.cancelQueries({ queryKey: ['testimonies'] });
      const previousData = queryClient.getQueryData(['testimonies']);
      
      queryClient.setQueryData(['testimonies'], (old) =>
        old.map((item) =>
          item.id === newData.id ? { ...item, ...newData.data } : item
        )
      );
      return { previousData };
    },
    onError: (err, _, context) => {
      queryClient.setQueryData(['testimonies'], context.previousData);
      console.error('Mutation error:', err.message);
      toast.error('Action failed. Please try again.');
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['testimonies'] });
    },
    onSuccess: () => {
      toast.success(successMessage || 'Action completed successfully.');
    },
  });

  return mutation;
};

// Update Testimony Hook
export const useUpdateTestimony = () => {
  return useCustomMutation(
    ({ id, data }) => updateTestimonies(id, data),
    'Testimony updated successfully!'
  );
};

// Remove Testimony Hook
export const useRemoveTestimony = () => {
  return useCustomMutation(
    (id) => removeTestimony(id),
    'Testimony removed successfully!'
  );
};