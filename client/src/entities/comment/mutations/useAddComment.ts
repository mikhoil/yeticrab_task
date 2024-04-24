import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ReactQueryKeys } from '../../../shared/lib';
import { addComment } from '../api/addComment';

export function useAddComment() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: addComment,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [ReactQueryKeys.comments],
            });
        },
    });
}
