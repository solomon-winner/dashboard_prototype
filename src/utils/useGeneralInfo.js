import { useQuery, useMutation, useQueryClient } from 'react-query';
import { fetchGeneralInfo, updateGeneralInfo } from '../utils/api';

export const useGeneralInfo = () => {
  return useQuery('generalInfo', fetchGeneralInfo);
};

export const useUpdateGeneralInfo = () => {
  const queryClient = useQueryClient();
  return useMutation(updateGeneralInfo, {
    onSuccess: () => {
      queryClient.invalidateQueries('generalInfo');
    },
  });
};