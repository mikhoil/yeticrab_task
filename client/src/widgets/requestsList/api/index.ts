import { IRequest, Status } from '../../../entities/request/model';
import { api } from '../../../shared/api';

export async function fetchRequests(status?: Status) {
    return (
        await api.get<IRequest[]>(
            '/requests' + (status ? `?status=${status}` : ''),
        )
    ).data;
}
