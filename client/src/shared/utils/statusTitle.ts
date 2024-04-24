import { Status } from '../../entities/request/model';

export function statusTitle(status: Status) {
    const statuses = new Map([
        ['todo', 'новая'],
        ['in_process', 'в работе'],
        ['completed', 'завершено'],
    ]);
    return statuses.get(status);
}
