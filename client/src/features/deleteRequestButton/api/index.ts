import { api } from '../../../shared/api';

export async function deleteRequest(number: number) {
    return (await api.delete(`/requests/${number}`)).data;
}
