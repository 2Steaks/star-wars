/** @format */

import type {
  Character,
  SearchCharactersQuery,
  SearchResponse
} from '@project/types';
import { useQuery } from 'react-query';
import { findCharactersByName } from '@project/services';

export const useSearchCharacters = (
  { name, page }: SearchCharactersQuery,
  options = {}
) => {
  return useQuery(
    ['characters', name, page],
    ({ signal }): Promise<SearchResponse<Character>> => {
      return findCharactersByName({ name, page }, { signal }).then(
        (res) => res.data
      );
    },
    { enabled: !!name, keepPreviousData: true, staleTime: Infinity, ...options }
  );
};
