import { useQuery, useMutation, useQueryClient } from 'react-query';
import { fetchGeneralInfo, updateGeneralInfo } from '../utils/api.js';
import handleError from '../utils/errorHandler.js';

export const useGeneralInfo = () => {
  return useQuery('generalInfo', fetchGeneralInfo, {
    onError: handleError,
  });
};

export const useUpdateGeneralInfo = () => {
  const queryClient = useQueryClient();
  return useMutation(updateGeneralInfo, {
    onSuccess: () => {
      queryClient.invalidateQueries('generalInfo');
    },
    onError: handleError,
  });
};