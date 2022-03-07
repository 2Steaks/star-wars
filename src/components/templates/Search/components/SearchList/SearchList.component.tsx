/** @format */

import type { Character } from '@project/types';
import type { SearchListProps } from './SearchList.types';
import React from 'react';
import { CharacterListItem, FlexFlow, FlexMain } from '@project/components';
import {
  SearchListFlex,
  SearchListIcon,
  SearchListItem
} from './SearchList.styles';
import { FlexCross } from '@project/components/atoms';

export const SearchList = ({
  characters,
  disabled = false,
  onListItemClick
}: SearchListProps) => {
  const results = characters?.results ?? [];

  function handleClick(character: Character) {
    return function () {
      !disabled && onListItemClick(character);
    };
  }

  if (!results.length) {
    return (
      <SearchListFlex cross={FlexCross.CENTER} main={FlexMain.CENTER}>
        <SearchListIcon size="10rem" />
      </SearchListFlex>
    );
  }

  return (
    <SearchListFlex flow={FlexFlow.COLUMN} as="ul">
      {results.map((character) => (
        <SearchListItem key={character.url} onClick={handleClick(character)}>
          <CharacterListItem
            key={character.url}
            character={character}
            disabled={disabled}
          />
        </SearchListItem>
      ))}
    </SearchListFlex>
  );
};
