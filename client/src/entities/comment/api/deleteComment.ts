import { api } from '../../../shared/api';
import { IComment } from '../model';

export async function deleteComment(id: number) {
    return (await api.delete<IComment>(`/comments/${id}`)).data;
}
