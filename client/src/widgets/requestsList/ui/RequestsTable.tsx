import {
    Link,
    Table,
    TableDataItem,
    withTableActions,
    withTableSorting,
} from '@gravity-ui/uikit';
import { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ShowComments } from '../../../entities/comment';
import { Status } from '../../../entities/request/model';
import { DeleteRequestButton } from '../../../features/deleteRequestButton';
import { EditRequestButton } from '../../../features/editRequestButton';
import { AdminModeContext } from '../../../shared/contexts/AdminModeContext';
import { LabelStatus } from '../../../shared/ui/LabelStatus';
import { getFormattedDateTime } from '../../../shared/utils/getFormattedDateTime';
import { wordEnd } from '../../../shared/utils/wordEnd';
import { useRequests } from '../queries';

export function RequestsTable() {
    const [searchParams] = useSearchParams();
    const { data } = useRequests(searchParams.get('status') as Status);

    const [isAdminMode] = useContext(AdminModeContext);
    const EditableTable = withTableActions(withTableSorting(Table));

    return (
        <>
            <h1 className="text-center text-xl">
                Найдено {data?.length ?? 0} {wordEnd(data?.length ?? 0)}
            </h1>
            <EditableTable
                rowActionsSize="xl"
                renderRowActions={({ item }) => {
                    if (isAdminMode)
                        return (
                            <div className="flex flex-col gap-y-6">
                                <EditRequestButton
                                    ati_code={item.ati_code}
                                    number={item.number}
                                    date_time={item.date_time}
                                    company_title={item.company_title}
                                    carrier_name={item.carrier_name}
                                    carrier_tel={item.carrier_tel}
                                    comments={item.comments}
                                    status={item.status}
                                />
                                <DeleteRequestButton number={item.number} />
                            </div>
                        );
                }}
                emptyMessage="не найдено заявок"
                className="m-4"
                columns={[
                    {
                        id: 'number',
                        name: 'Номер',
                        className: 'w-1/12',
                        align: 'center',
                        meta: {
                            sort: (a: TableDataItem, b: TableDataItem) =>
                                b.number - a.number,
                        },
                    },
                    {
                        id: 'date_time',
                        name: 'Дата и время',
                        className: 'w-1/6',
                        align: 'center',
                        template: (item, index) => (
                            <div id={index.toString()}>
                                {getFormattedDateTime(item.date_time)}
                            </div>
                        ),
                        meta: {
                            sort: (a: TableDataItem, b: TableDataItem) =>
                                Date.parse(b.date_time) -
                                Date.parse(a.date_time),
                        },
                    },
                    {
                        id: 'company_title',
                        name: 'Название компании',
                        className: 'w-1/6',
                        align: 'center',
                        meta: {
                            sort: (a: TableDataItem, b: TableDataItem) =>
                                (b.company_title as string).localeCompare(
                                    a.company_title as string,
                                ),
                        },
                    },
                    {
                        id: 'carrier_name',
                        name: 'ФИО перевозчика',
                        className: 'w-1/6',
                        align: 'center',
                    },
                    {
                        id: 'carrier_tel',
                        name: 'Номер телефона перевозчика',
                        className: 'w-1/6',
                        align: 'center',
                    },
                    {
                        id: 'comments',
                        name: 'Комментарии',
                        className: 'w-1/6',
                        align: 'center',
                        template: item => {
                            return (
                                <ShowComments request_number={item.number} />
                            );
                        },
                    },
                    {
                        id: 'status',
                        name: 'Статус',
                        className: 'w-1/6',
                        align: 'center',
                        template: item => <LabelStatus status={item.status} />,
                    },
                    {
                        id: 'ati_code',
                        name: 'ATI-код',
                        className: 'w-1/6',
                        align: 'center',
                        template: item => (
                            <Link href={`https://ati.su/firms/${item}/info`}>
                                {item.ati_code}
                            </Link>
                        ),
                        meta: {
                            sort: (a: TableDataItem, b: TableDataItem) =>
                                +b.ati_code - +a.ati_code,
                        },
                    },
                ]}
                data={data ?? []}
                edgePadding={true}
            />
        </>
    );
}
