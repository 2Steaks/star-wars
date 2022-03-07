/** @format */

import type { Movie } from '@project/types';
import { useQueries } from 'react-query';
import { findMovieById } from '@project/services';

export const useSearchMovies = (ids: string[] = [], options = {}) => {
  const queries = ids.map((id) => ({
    queryKey: ['movie', id],
    queryFn: ({ signal }: { signal?: AbortSignal }): Promise<Movie> => {
      return findMovieById(id, { signal }).then((res) => res.data);
    },
    enabled: !!ids.length,
    staleTime: Infinity,
    ...options
  }));

  return useQueries(queries);
};
