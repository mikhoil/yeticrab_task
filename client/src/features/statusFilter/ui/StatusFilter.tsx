import { RadioButton, RadioButtonOption } from '@gravity-ui/uikit';
import { useNavigate, useSearchParams } from 'react-router-dom';

export function StatusFilter() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const options: RadioButtonOption[] = [
        {
            value: 'all',
            content: 'все',
        },
        {
            value: 'todo',
            content: 'новые',
        },
        {
            value: 'in_process',
            content: 'в работе',
        },
        {
            value: 'completed',
            content: 'завершенные',
        },
    ];

    return (
        <RadioButton
            options={options}
            defaultValue={
                searchParams.get('status') === null ||
                searchParams.get('status') === 'uncompleted'
                    ? 'all'
                    : searchParams.get('status')!
            }
            onChange={({ target: { checked, value } }) => {
                if (checked) {
                    navigate(value === 'all' ? '' : '?status=' + value);
                }
            }}
        />
    );
}
