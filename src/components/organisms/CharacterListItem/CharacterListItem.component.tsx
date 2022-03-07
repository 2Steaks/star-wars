/** @format */

import type { CharacterListItemProps } from './CharacterListItem.types';
import React from 'react';
import { getUrlLastSegment, head } from '@project/utils';
import { useSearchPlanet, useSearchSpecies } from '@project/hooks';
import { Element, Heading, Paragraph } from './CharacterListItem.styles';

export const CharacterListItem = ({
  character,
  'data-testid': dataTestId = 'character-list-item',
  ...props
}: CharacterListItemProps) => {
  const { data: planet } = useSearchPlanet(
    getUrlLastSegment(character.homeworld)
  );
  const { data: species } = useSearchSpecies(
    getUrlLastSegment(head(character.species))
  );

  return (
    <Element data-testid={dataTestId} {...props}>
      <Heading>Name: {character.name}</Heading>
      <Paragraph>Species: {species?.name ?? '---'}</Paragraph>
      <Paragraph>Planet: {planet?.name ?? '---'}</Paragraph>
      <Paragraph>Population: {planet?.population ?? '---'}</Paragraph>
    </Element>
  );
};
