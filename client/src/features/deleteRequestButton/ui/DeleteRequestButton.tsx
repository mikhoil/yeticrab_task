import { TrashBin } from '@gravity-ui/icons';
import { Button, Modal } from '@gravity-ui/uikit';
import { useState } from 'react';
import { useDeleteRequest } from '../mutations';

export function DeleteRequestButton({ number }: { number: number }) {
    const [open, setOpen] = useState(false);

    const { mutate } = useDeleteRequest();

    return (
        <>
            <TrashBin
                color="red"
                onClick={() => setOpen(true)}
                className="cursor-pointer"
            />
            <Modal open={open} onClose={() => setOpen(false)}>
                <div className="p-4 flex flex-col gap-y-4">
                    <h1>Вы уверены, что хотите удалить заявку?</h1>
                    <div className="flex justify-between">
                        <Button
                            onClick={() => {
                                mutate(number);
                                setOpen(false);
                            }}
                        >
                            Да
                        </Button>
                        <Button onClick={() => setOpen(false)}>Нет</Button>
                    </div>
                </div>
            </Modal>
        </>
    );
}
