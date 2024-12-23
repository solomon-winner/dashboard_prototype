import {useQuery,useMutation,useQueryClient} from 'react-query';
import {fetchTestimonies,removeTestimony} from './api.js';

export const useTestimonies = () => {
    return useQuery('testimonies', fetchTestimonies);
}

export const useRemoveTestimony = () => {
    const queryClient = useQueryClient();
    return useMutation(removeTestimony, {
        onSuccess: () => {
            queryClient.invalidateQueries('testimonies');
        }
    })
}