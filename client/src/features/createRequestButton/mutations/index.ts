import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ReactQueryKeys } from '../../../shared/lib';
import { createRequest } from '../api';

export function useCreateRequest() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createRequest,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [ReactQueryKeys.requests],
            });
        },
    });
}
