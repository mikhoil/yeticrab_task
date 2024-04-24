import { Pencil } from '@gravity-ui/icons';
import { Button, Modal, Select, TextInput } from '@gravity-ui/uikit';
import { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { IRequest, Status } from '../../../entities/request/model';
import { LabelStatus } from '../../../shared/ui/LabelStatus';
import { useEditRequest } from '../mutations';

export interface IEditRequestData {
    number: number;
    company_title: string;
    carrier_name: string;
    carrier_tel: string;
    ati_code: string;
    status: Status;
}

export function EditRequestButton({
    ati_code,
    carrier_name,
    carrier_tel,
    company_title,
    number,
    status,
}: IRequest) {
    const [open, setOpen] = useState(false);

    const { reset, handleSubmit, control } = useForm<IEditRequestData>({
        defaultValues: {
            number,
            ati_code,
            carrier_name,
            carrier_tel,
            company_title,
            status,
        },
    });

    const { mutate } = useEditRequest();

    const onSubmit: SubmitHandler<IEditRequestData> = async data => {
        mutate(data);
        reset();
        setOpen(false);
    };

    return (
        <>
            <Pencil onClick={() => setOpen(true)} className="cursor-pointer" />
            <Modal open={open} onClose={() => setOpen(false)}>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="p-4 flex flex-col gap-y-4"
                >
                    <Controller
                        rules={{ required: true }}
                        control={control}
                        name="company_title"
                        render={({ field: { name, value, onChange } }) => (
                            <TextInput
                                placeholder="Название компании"
                                name={name}
                                value={value}
                                onChange={onChange}
                            />
                        )}
                    />
                    <Controller
                        rules={{ required: true }}
                        control={control}
                        name="carrier_name"
                        render={({ field: { name, value, onChange } }) => (
                            <TextInput
                                placeholder="ФИО перевозчика"
                                name={name}
                                value={value}
                                onChange={onChange}
                            />
                        )}
                    />
                    <Controller
                        rules={{ required: true }}
                        control={control}
                        name="carrier_tel"
                        render={({ field: { name, value, onChange } }) => (
                            <TextInput
                                placeholder="Номер телефона перевозчика"
                                name={name}
                                value={value}
                                onChange={onChange}
                            />
                        )}
                    />
                    <Controller
                        rules={{ required: true }}
                        control={control}
                        name="status"
                        render={({ field }) => (
                            <Select
                                name={field.name}
                                label="Статус:"
                                multiple={false}
                                defaultValue={[field.value]}
                                renderSelectedOption={({ value }) => (
                                    <LabelStatus
                                        status={
                                            value as
                                                | 'todo'
                                                | 'in_process'
                                                | 'completed'
                                        }
                                    />
                                )}
                                options={[
                                    { value: 'todo', content: 'новая' },
                                    {
                                        value: 'in_process',
                                        content: 'в работе',
                                    },
                                    {
                                        value: 'completed',
                                        content: 'завершено',
                                    },
                                ]}
                                onUpdate={e => field.onChange(e[0])}
                            />
                        )}
                    />
                    <Controller
                        rules={{ required: true }}
                        control={control}
                        name="ati_code"
                        render={({ field: { name, value, onChange } }) => (
                            <TextInput
                                placeholder="ATI-код компании"
                                name={name}
                                value={value}
                                onChange={onChange}
                            />
                        )}
                    />
                    <div className="flex justify-between">
                        <Button type="button" onClick={() => setOpen(false)}>
                            Отмена
                        </Button>
                        <Button type="submit">Сохранить</Button>
                    </div>
                </form>
            </Modal>
        </>
    );
}
