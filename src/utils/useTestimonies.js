import {useQuery,useMutation,useQueryClient} from 'react-query';
import {fetchTestimonies,removeTestimony} from './api.js';
import handleError from './errorHandler.js';

export const useTestimonies = () => {
    return useQuery('testimonies', fetchTestimonies, {
            onError: handleError,
        }
    );
}

export const useRemoveTestimony = () => {
    const queryClient = useQueryClient();
    return useMutation(removeTestimony, {
        onSuccess: () => {
            queryClient.invalidateQueries('testimonies');
        },
        onError: handleError,
    })
}