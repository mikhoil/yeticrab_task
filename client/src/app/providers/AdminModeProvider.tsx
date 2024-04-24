import { PropsWithChildren, useState } from 'react';
import { AdminModeContext } from '../../shared/contexts/AdminModeContext';

export function AdminModeProvider({ children }: PropsWithChildren) {
    return (
        <AdminModeContext.Provider value={useState(false)}>
            {children}
        </AdminModeContext.Provider>
    );
}
