import { useQuery, useMutation, useQueryClient } from 'react-query';
import { fetchSongs, addSongs, updateSong, removeSong } from '../utils/api.js';
import handleError from '../utils/errorHandler.js';

export const useSongs = () => {
  return useQuery('songs', fetchSongs, {
    onError: handleError,
  });
};

export const useAddSong = () => {
  const queryClient = useQueryClient();
  return useMutation(addSongs, {
    onSuccess: () => {
      queryClient.invalidateQueries('songs');
    },
    onError: handleError,
  });
};

export const useUpdateSong = () => {
  const queryClient = useQueryClient();
  return useMutation(updateSong, {
    onSuccess: () => {
      queryClient.invalidateQueries('songs');
    },
    onError: handleError,
  });
};

export const useRemoveSong = () => {
  const queryClient = useQueryClient();
  return useMutation(removeSong, {
    onSuccess: () => {
      queryClient.invalidateQueries('songs');
    },
    onError: handleError,
  });
};