import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // fresh data for 5 min
      gcTime: 1000 * 60 * 10, // 10 min cache
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
})
