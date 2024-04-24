import { IRequest } from '../../../entities/request/model';
import { api } from '../../../shared/api';
import { IEditRequestData } from '../ui/EditRequestButton';

export async function editRequest(request: IEditRequestData) {
    return (await api.put<IRequest>(`/requests/${request.number}`, request))
        .data;
}
