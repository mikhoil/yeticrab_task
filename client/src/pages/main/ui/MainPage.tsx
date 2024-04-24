import { HideCompletedCheckbox } from '../../../features/hideCompletedCheckbox';
import { StatusFilter } from '../../../features/statusFilter';
import { RequestsTable } from '../../../widgets/requestsList/ui/RequestsTable';

export function MainPage() {
    return (
        <>
            <div className="flex items-center justify-center gap-x-10 my-10">
                <StatusFilter />
                <HideCompletedCheckbox />
            </div>
            <RequestsTable />
        </>
    );
}
