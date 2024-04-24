import { api } from '../../../shared/api';
import { IComment } from '../model';

export async function addComment(comment: {
    text: string;
    request_number: number;
}) {
    return (await api.post<IComment>('/comments', comment)).data;
}
