import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query';

const onError = (error: unknown) => {
  // TODO: handle errors with toast messages
};

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError,
  }),
  mutationCache: new MutationCache({
    onError,
  }),
});

export { queryClient };
