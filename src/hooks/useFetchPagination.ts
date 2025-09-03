import { useInfiniteQuery, type UseInfiniteQueryOptions } from '@tanstack/react-query';
import type { PageResponse, PaginationParams } from '../types/api';

/*interface UseFetchPaginationOptions<T>
  extends Omit<
    UseInfiniteQueryOptions<PageResponse<T>, Error>,
    'queryKey' | 'queryFn' | 'initialPageParam' | 'getNextPageParam'
  > {
  queryKey: string[];
  fetcher: (params: PaginationParams) => Promise<PageResponse<T>>;
  pageSize?: number;
  initialPageParam?: number;
  queryOptions: {}
}

export const useFetchPagination2 = <T>({
  queryKey,
  fetcher,
  pageSize = 10,
  initialPageParam = 1,
  queryOptions = {}
}: UseFetchPaginationOptions<T>) => {
  return useInfiniteQuery<PageResponse<T>, Error>({
    queryKey: [...queryKey, 'infinite', pageSize],
    queryFn: async ({ pageParam = initialPageParam }) => {
      return fetcher({
        page: Number(pageParam),
        limit: pageSize
      });
    },
    initialPageParam,
    getNextPageParam: (lastPage) => {
      return lastPage.pagination?.hasNextPage
        ? lastPage.pagination.nextPage ?? lastPage.pagination.currentPage + 1
        : undefined;
    },
    ...queryOptions, // This now works correctly
  });
};*/


export const useContactsPagination = <T>({
  queryKey,
  fetcher,
  pageSize = 10,
  enabled = true,
}: UseFetchPaginationOptions<T>
) => {
  return useInfiniteQuery<PageResponse<T>, Error>({
    queryKey: [queryKey, 'infinite', pageSize],
    queryFn: async ({ pageParam = 1 }) => {
      const params = {
        page: pageParam as number,
        limit: pageSize,
      };

      return fetcher(params);
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.pagination.hasNextPage
        ? lastPage.pagination.nextPage ?? lastPage.pagination.currentPage + 1
        : undefined;
    },
    enabled,
  });
};

interface UseFetchPaginationOptions<T> {
  queryKey: string[];
  fetcher: (params: PaginationParams) => Promise<PageResponse<T>>;
  pageSize?: number;
  initialPageParam?: number;
  enabled?: boolean;
  staleTime?: number;
  refetchOnWindowFocus?: boolean;
  // React Query v5 placeholder data options
  placeholderData?: UseInfiniteQueryOptions<PageResponse<T>, Error>['placeholderData'];
}

export const useFetchPagination = <T>({
  queryKey,
  fetcher,
  pageSize = 10,
  initialPageParam = 1,
  enabled = true,
  staleTime,
  refetchOnWindowFocus,
  placeholderData,
}: UseFetchPaginationOptions<T>) => {
  return useInfiniteQuery<PageResponse<T>, Error>({
    queryKey: [...queryKey, 'infinite', pageSize],
    queryFn: async ({ pageParam = initialPageParam }) => {
      return fetcher({ 
        page: Number(pageParam), 
        limit: pageSize 
      });
    },
    initialPageParam,
    getNextPageParam: (lastPage) => {
      return lastPage.pagination?.hasNextPage 
        ? lastPage.pagination.nextPage ?? lastPage.pagination.currentPage + 1
        : undefined;
    },
    enabled,
    staleTime,
    refetchOnWindowFocus,
    placeholderData,
  });
};