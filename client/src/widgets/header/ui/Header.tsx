import { AdminModeSwitch } from '../../../features/adminModeSwitch';
import { CreateRequestButton } from '../../../features/createRequestButton/ui/CreateRequestButton';

export function Header() {
    return (
        <header className="flex items-center justify-center gap-x-10 pt-5">
            <AdminModeSwitch />
            <CreateRequestButton />
        </header>
    );
}
