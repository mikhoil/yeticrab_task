import { useQuery } from '@tanstack/react-query';
import { ReactQueryKeys } from '../../../shared/lib';
import { fetchComments } from '../api/fetchComments';

export function useComments(request_number: number) {
    return useQuery({
        queryKey: [ReactQueryKeys.comments, request_number],
        queryFn: () => fetchComments(request_number),
    });
}
