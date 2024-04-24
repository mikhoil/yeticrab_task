import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ReactQueryKeys } from '../../../shared/lib';
import { editRequest } from '../api';

export function useEditRequest() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: editRequest,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [ReactQueryKeys.requests],
            });
        },
    });
}
