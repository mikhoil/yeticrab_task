import { useQuery } from '@tanstack/react-query';
import { Status } from '../../../entities/request/model';
import { ReactQueryKeys } from '../../../shared/lib';
import { fetchRequests } from '../api';

export function useRequests(status?: Status) {
    return useQuery({
        queryKey: [ReactQueryKeys.requests, status],
        queryFn: () => fetchRequests(status),
    });
}
