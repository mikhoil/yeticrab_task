import { Label } from '@gravity-ui/uikit';
import { statusTitle } from '../utils/statusTitle';

export function LabelStatus({
    status,
}: {
    status: 'todo' | 'in_process' | 'completed';
}) {
    const themes = new Map<string, 'info' | 'warning' | 'success'>([
        ['todo', 'info'],
        ['in_process', 'warning'],
        ['completed', 'success'],
    ]);
    return <Label theme={themes.get(status)!}>{statusTitle(status)}</Label>;
}
