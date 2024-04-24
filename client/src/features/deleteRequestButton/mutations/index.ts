import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ReactQueryKeys } from '../../../shared/lib';
import { deleteRequest } from '../api';

export function useDeleteRequest() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteRequest,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [ReactQueryKeys.requests],
            });
        },
    });
}
