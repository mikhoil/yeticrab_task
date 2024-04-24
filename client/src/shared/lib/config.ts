import { QueryClient, QueryClientConfig } from '@tanstack/react-query';

export const reactQueryConfig: QueryClientConfig = {
    defaultOptions: {
        queries: {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
        },
    },
};

export const queryClient = new QueryClient();
