import { ThemeProvider } from '@gravity-ui/uikit';
import { PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AdminModeProvider } from './AdminModeProvider';
import { QueryProvider } from './QueryProvider';

export function MainProvider({ children }: PropsWithChildren) {
    return (
        <ThemeProvider theme="system">
            <QueryProvider>
                <BrowserRouter>
                    <AdminModeProvider>{children}</AdminModeProvider>
                </BrowserRouter>
            </QueryProvider>
        </ThemeProvider>
    );
}
