import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../../pages/main/ui/MainPage';
import { MainLayot } from '../layouts/MainLayot';

export function RouterProvider() {
    return (
        <Routes>
            <Route path="/" element={<MainLayot />}>
                <Route index element={<MainPage />} />
            </Route>
            <Route path="*" element={<>404 Not Found</>} />
        </Routes>
    );
}
