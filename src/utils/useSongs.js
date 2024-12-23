import { useQuery, useMutation, useQueryClient } from 'react-query';
import { fetchSongs, addSong, updateSong, removeSong } from './api';

export const useSongs = () => {
  return useQuery('songs', fetchSongs);
};

export const useAddSong = () => {
  const queryClient = useQueryClient();
  return useMutation(addSong, {
    onSuccess: () => {
      queryClient.invalidateQueries('songs');
    },
  });
};

export const useUpdateSong = () => {
  const queryClient = useQueryClient();
  return useMutation(updateSong, {
    onSuccess: () => {
      queryClient.invalidateQueries('songs');
    },
  });
};

export const useRemoveSong = () => {
  const queryClient = useQueryClient();
  return useMutation(removeSong, {
    onSuccess: () => {
      queryClient.invalidateQueries('songs');
    },
  });
};