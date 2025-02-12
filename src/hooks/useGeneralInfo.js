import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchGeneralInfo, updateGeneralInfo } from '../utils/api.js';
import handleError from '../utils/errorHandler.js';
import { useSetRecoilState } from 'recoil';
import { companyInfoState } from '../state/state.js';

export const useGeneralInfo = () => {
  const setCompanyInfo = useSetRecoilState(companyInfoState);

  return useQuery('generalInfo', fetchGeneralInfo, {
    onSuccess: (data) => {
      setCompanyInfo(data);
    },
    onError: handleError,
  });
};

export const useUpdateGeneralInfo = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: updateGeneralInfo,  
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['generalInfo'] });
    },
    onError: handleError,
  });
};
