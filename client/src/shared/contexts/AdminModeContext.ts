import { Dispatch, SetStateAction, createContext } from 'react';

export const AdminModeContext = createContext<
    [boolean, Dispatch<SetStateAction<boolean>>]
>(null!);
