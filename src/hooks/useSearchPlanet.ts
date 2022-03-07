/** @format */

import type { Planet } from '@project/types';
import { useQuery } from 'react-query';
import { findPlanetById } from '@project/services';

export const useSearchPlanet = (id: string, options = {}) => {
  return useQuery(
    ['planet', id],
    ({ signal }): Promise<Planet> => {
      return findPlanetById(id, { signal }).then((res) => res.data);
    },
    { enabled: !!id, staleTime: Infinity, ...options }
  );
};
