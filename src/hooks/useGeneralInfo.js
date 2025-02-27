import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchGeneralInfo, updateGeneralInfo } from '../utils/api.js';
import handleError from '../utils/errorHandler.js';
import { useSetRecoilState } from 'recoil';
import { generalInfoState } from '../state/state.js';

export const useGeneralInfo = () => {
  const setGeneralInfo = useSetRecoilState(generalInfoState);

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ['generalInfo'],
    queryFn: fetchGeneralInfo,
    staleTime: 5 * 60 * 1000, // Data is considered fresh for 5 minutes
    refetchOnWindowFocus: false, // Disable refetching on window focus
    retry: 2, // Retry failed requests twice
  });

  // Update Recoil state when data is fetched
  useEffect(() => {
    if (data) {
      setGeneralInfo(data);
    }
  }, [data, setGeneralInfo]);

  // Handle errors
  useEffect(() => {
    if (isError) {
      console.error('Fetching generalInfo failed:', error.message);
      toast.error('Failed to load generalInfo. Please try again.'); // Show a toast notification
    }
  }, [isError, error]);

  // Return query results for the component to use
  return { data, isLoading, isError };
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
