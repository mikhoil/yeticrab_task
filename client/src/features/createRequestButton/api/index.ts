import { IRequest } from '../../../entities/request/model';
import { api } from '../../../shared/api';
import { ICreateRequestData } from '../ui';

export async function createRequest(request: ICreateRequestData) {
    return (await api.post<IRequest>('/requests', request)).data;
}
