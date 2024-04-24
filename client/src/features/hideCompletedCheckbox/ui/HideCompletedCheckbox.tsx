import { Checkbox } from '@gravity-ui/uikit';
import { useNavigate, useSearchParams } from 'react-router-dom';

export function HideCompletedCheckbox() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    return (
        <Checkbox
            content="Скрыть завершенные заявки"
            disabled={
                searchParams.get('status') !== null &&
                searchParams.get('status') !== 'uncompleted'
            }
            checked={searchParams.get('status') === 'uncompleted'}
            onChange={e => {
                if (e.target.checked) navigate('?status=uncompleted');
                else navigate(-1);
            }}
        />
    );
}
