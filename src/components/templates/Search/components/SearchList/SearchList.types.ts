/** @format */

import type { Character, SearchResponse } from '@project/types';

export type SearchListProps = {
  characters?: SearchResponse<Character>;
  disabled?: boolean;
  onListItemClick: (character: Character) => void;
};
