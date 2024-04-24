import { Switch } from '@gravity-ui/uikit';
import { useContext } from 'react';
import { AdminModeContext } from '../../../shared/contexts/AdminModeContext';

export function AdminModeSwitch() {
    const [isAdminMode, setIsAdminMode] = useContext(AdminModeContext);
    return (
        <Switch
            checked={isAdminMode}
            onUpdate={e => setIsAdminMode(e)}
            controlProps={{ color: '#ffffff' }}
            size="l"
            content={'Режим администратора'}
        />
    );
}
