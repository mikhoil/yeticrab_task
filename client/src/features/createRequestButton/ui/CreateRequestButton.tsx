import { Button, Modal, TextInput } from '@gravity-ui/uikit';
import { useContext, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { AdminModeContext } from '../../../shared/contexts/AdminModeContext';
import { useCreateRequest } from '../mutations';

export interface ICreateRequestData {
    company_title: string;
    carrier_name: string;
    carrier_tel: string;
    ati_code: string;
}

export function CreateRequestButton() {
    const [isAdminMode] = useContext(AdminModeContext);

    const { mutate } = useCreateRequest();

    const [open, setOpen] = useState(false);

    const { control, handleSubmit, reset } = useForm<ICreateRequestData>({
        mode: 'onChange',
        defaultValues: {
            ati_code: '',
            carrier_name: '',
            carrier_tel: '',
            company_title: '',
        },
    });

    const onSubmit: SubmitHandler<ICreateRequestData> = async data => {
        mutate(data);
        reset();
        setOpen(false);
    };

    return (
        <>
            <Button
                className="bg-blue-400 text-black font-medium disabled:bg-gray-500 hover:text-blue-900"
                disabled={!isAdminMode}
                onClick={() => {
                    setOpen(true);
                }}
            >
                Создать заявку
            </Button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="p-4 flex flex-col gap-y-4"
                >
                    <Controller
                        rules={{ required: true }}
                        control={control}
                        render={({ field: { name, onChange, value } }) => (
                            <TextInput
                                placeholder="Название компании"
                                name={name}
                                value={value}
                                onChange={onChange}
                            />
                        )}
                        name={'company_title'}
                    />
                    <Controller
                        rules={{ required: true }}
                        control={control}
                        render={({ field: { name, onChange, value } }) => (
                            <TextInput
                                placeholder="ФИО перевозчика"
                                name={name}
                                value={value}
                                onChange={onChange}
                            />
                        )}
                        name={'carrier_name'}
                    />
                    <Controller
                        rules={{ required: true }}
                        control={control}
                        render={({ field: { name, onChange, value } }) => (
                            <TextInput
                                placeholder="Номер телефона перевозчика"
                                name={name}
                                value={value}
                                onChange={onChange}
                            />
                        )}
                        name={'carrier_tel'}
                    />
                    <Controller
                        rules={{ required: true }}
                        control={control}
                        render={({ field: { name, onChange, value } }) => (
                            <TextInput
                                placeholder="ATI код компании"
                                name={name}
                                value={value}
                                onChange={onChange}
                            />
                        )}
                        name={'ati_code'}
                    />
                    <div className="flex justify-between">
                        <Button type="button" onClick={() => setOpen(false)}>
                            Отмена
                        </Button>
                        <Button type="submit">Создать</Button>
                    </div>
                </form>
            </Modal>
        </>
    );
}
