/** @format */

import type { Character, SearchResponse } from '@project/types';

export const getResults = (data?: SearchResponse<Character>) =>
  data?.results ?? [];
