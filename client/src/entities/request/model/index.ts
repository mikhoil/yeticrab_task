import { IComment } from '../../comment/model';

export type Status = 'todo' | 'in_process' | 'completed' | 'uncompleted';

export interface IRequest {
    number: number;
    date_time: Date;
    company_title: string;
    carrier_name: string;
    carrier_tel: string;
    status: Status;
    ati_code: string;
    comments: IComment[];
}
