import { api } from '../../../shared/api';
import { IComment } from '../model';

export async function fetchComments(request_number: number) {
    return (await api.get<IComment[]>(`/comments/${request_number}`)).data;
}
