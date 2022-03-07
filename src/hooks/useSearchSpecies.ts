/** @format */

import type { Species } from '@project/types';
import { useQuery } from 'react-query';
import { findSpeciesById } from '@project/services';

export const useSearchSpecies = (id: string, options = {}) => {
  return useQuery(
    ['species', id],
    ({ signal }): Promise<Species> => {
      return findSpeciesById(id, { signal }).then((res) => res.data);
    },
    { enabled: !!id, staleTime: Infinity, ...options }
  );
};
