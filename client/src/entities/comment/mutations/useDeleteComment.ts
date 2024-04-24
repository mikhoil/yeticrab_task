import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ReactQueryKeys } from '../../../shared/lib';
import { deleteComment } from '../api/deleteComment';

export function useDeleteComment() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteComment,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [ReactQueryKeys.comments],
            });
        },
    });
}
