import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchSongs, addSongs, updateSong, removeSong } from '../utils/api.js';
import handleError from '../utils/errorHandler.js';
import { useSetRecoilState } from 'recoil';
import { songsState } from '../state/state.js';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

export const useSongs = () => {
  const setSongs = useSetRecoilState(songsState);

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ['songs'],
    queryFn: fetchSongs,
    staleTime: 5 * 60 * 1000,  // Cache data for 5 minutes
    refetchOnWindowFocus: false,  // Prevent unnecessary refetch on window focus
    retry: 2,  // Retry twice on failure
  });

  useEffect(() => {
    if (data) {
      setSongs(data);
    }
  }, [data, setSongs]);

  useEffect(() => {
    if (isError) {
      console.error('Fetching songs failed:', error.message);
      handleError(error);
    }
  }, [isError, error]);

  return { data, isLoading, isError };
};

export const useAddSong = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addSongs,
    retry: 2,
  });

  useEffect(() => {
    if (mutation.isSuccess) {
      queryClient.invalidateQueries({ queryKey: ['songs'] });
      toast.success('Song added successfully.');
    }
  }, [mutation.isSuccess, queryClient]);

  useEffect(() => {
    if (mutation.isError) {
      console.error('Error adding song:', mutation.error.message);
      toast.error('Failed to add song. Please try again.');
    }
  }, [mutation.isError, mutation.error]);

  return mutation;
};

export const useUpdateSong = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ id, data }) => updateSong(id, data),
    retry: 2,
  });

  useEffect(() => {
    if (mutation.isSuccess) {
      queryClient.invalidateQueries({ queryKey: ['songs'] });
      toast.success('Song updated successfully.');
    }
  }, [mutation.isSuccess, queryClient]);

  useEffect(() => {
    if (mutation.isError) {
      console.error('Error updating song:', mutation.error.message);
      toast.error('Failed to update song. Please try again.');
    }
  }, [mutation.isError, mutation.error]);

  return mutation;
};

export const useRemoveSong = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id) => removeSong(id),
    retry: 2,
  });

  useEffect(() => {
    if (mutation.isSuccess) {
      queryClient.invalidateQueries({ queryKey: ['songs'] });
      toast.success('Song removed successfully.');
    }
  }, [mutation.isSuccess, queryClient]);

  useEffect(() => {
    if (mutation.isError) {
      console.error('Error removing song:', mutation.error.message);
      toast.error('Failed to remove song. Please try again.');
    }
  }, [mutation.isError, mutation.error]);

  return mutation;
};