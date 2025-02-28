import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchSongs, addSongs, updateSong, removeSong } from '../utils/api.js';
import handleError from '../utils/errorHandler.js';
import { useSetRecoilState } from 'recoil';
import { songsState, albumsState } from '../state/state.js';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

export const useSongs = (type) => {
  const setSongs = useSetRecoilState(songsState);
  const setAlbums = useSetRecoilState(albumsState);

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["songs", type],  // Cache separately for each type
    queryFn: () => fetchSongs(type),
    staleTime: 5 * 60 * 1000, // Cache data for 5 minutes
    refetchOnWindowFocus: false, // Prevent unnecessary refetch on window focus
    retry: 2, // Retry twice on failure
  });

  useEffect(() => {
    if (data) {
      if (type === "song") {
        setSongs(data); // Store songs in songsState
      } else if (type === "album") {
        setAlbums(data); // Store albums in albumsState
      }
    }
  }, [data, type, setSongs, setAlbums]);

  useEffect(() => {
    if (isError) {
      console.error("Fetching songs failed:", error.message);
      handleError(error);
    }
  }, [isError, error]);

  return { data, isLoading, isError };
};

export const useAddSong = (type) => {
  const queryClient = useQueryClient();
  const setSongs = useSetRecoilState(songsState);
  const setAlbums = useSetRecoilState(albumsState);

  const mutation = useMutation({
    mutationFn: addSongs, // Ensure this function handles both songs/albums
    retry: 2,
    onSuccess: (newItem) => {
      
      queryClient.invalidateQueries(['songs', type]);
    },
  });

  useEffect(() => {
    if (mutation.isSuccess) {
      toast.success(`${type === 'song' ? 'Song' : 'Album'} added successfully.`);
    }
  }, [mutation.isSuccess, type]);

  useEffect(() => {
    if (mutation.isError) {
      toast.error(`Failed to add ${type === 'song' ? 'song' : 'album'}.`);
      console.error(mutation.error);
    }
  }, [mutation.isError, mutation.error, type]);

  return mutation;
};

export const useUpdateSong = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ id, data }) => updateSong(id, data),
    retry: 1,
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

  return mutation.mutate; // ✅ Return only `mutate` function
};
