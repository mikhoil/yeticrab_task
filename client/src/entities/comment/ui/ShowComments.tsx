import { TrashBin } from '@gravity-ui/icons';
import { Button, Modal, Text, TextArea } from '@gravity-ui/uikit';
import { useQueryClient } from '@tanstack/react-query';
import { useContext, useRef, useState } from 'react';
import { AdminModeContext } from '../../../shared/contexts/AdminModeContext';
import { ReactQueryKeys } from '../../../shared/lib';
import { useAddComment } from '../mutations/useAddComment';
import { useDeleteComment } from '../mutations/useDeleteComment';
import { useComments } from '../queries';

export function ShowComments({ request_number }: { request_number: number }) {
    const [open, setOpen] = useState(false);
    const [isAdminMode] = useContext(AdminModeContext);
    const [text, setText] = useState('');
    const { mutate: addComment } = useAddComment();
    const { mutate: deleteComment } = useDeleteComment();
    const { data: comments } = useComments(request_number);
    const ref = useRef<HTMLTextAreaElement>(null);
    const queryClient = useQueryClient();

    return (
        <>
            <Button onClick={() => setOpen(true)}>
                Показать комментарии ({comments?.length})
            </Button>
            <Modal
                open={open}
                onClose={() => {
                    setOpen(false);
                    queryClient.invalidateQueries({
                        queryKey: [ReactQueryKeys.requests],
                    });
                }}
            >
                <ul className="p-4 flex flex-col gap-y-5 max-w-7xl">
                    {comments && comments?.length === 0 && (
                        <Text>Здесь пока нет комментариев</Text>
                    )}
                    {comments?.map(comment => (
                        <li key={comment.id} className="flex justify-between">
                            <Text key={comment.id} ellipsis>
                                {comment.text}
                            </Text>
                            {isAdminMode && (
                                <TrashBin
                                    color="red"
                                    onClick={() => deleteComment(comment.id)}
                                />
                            )}
                        </li>
                    ))}
                    {isAdminMode && (
                        <>
                            <TextArea
                                value={text}
                                onChange={e =>
                                    e.target.value.length < 150 &&
                                    setText(e.target.value)
                                }
                                ref={ref}
                            />
                            <Button
                                onClick={() => {
                                    addComment({
                                        text,
                                        request_number,
                                    });
                                    setText('');
                                    ref.current!.value = '';
                                }}
                            >
                                Добавить комментарий
                            </Button>
                        </>
                    )}
                </ul>
            </Modal>
        </>
    );
}
