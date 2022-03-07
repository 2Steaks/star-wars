/** @format */

import type { Character, Movie } from '@project/types';
import type { SearchFormData } from './Search.types';
import React, { useEffect, useState } from 'react';
import { sizes } from '@project/theme';
import { useSearchCharacters, useSearchMovies } from '@project/hooks';
import { Flex, FlexFlow, Pagination, Card } from '@project/components';
import { SearchForm, SearchList, SearchModal } from './components';
import {
  getAllData,
  getPageCount,
  isLoadingQueries,
  mapMovieIds
} from './Search.utils';

export const SearchTemplate = () => {
  const [character, setCharacter] = useState<Character | null>(null);
  const [isModalActive, setIsModalActive] = useState(false);
  const [name, setName] = useState('');
  const [page, setPage] = useState(1);
  const characters = useSearchCharacters({ name, page });
  const movies = useSearchMovies(mapMovieIds(character?.films));
  const moviesData = getAllData(movies) as Movie[];
  const isLoading = characters.isLoading || isLoadingQueries(movies);

  function submitSearch(data: SearchFormData) {
    if (data.name === name) {
      return;
    }

    setPage(1);
    setName(data.name);
  }

  function handleModalClose() {
    setIsModalActive(false);
  }

  function handleModalTransitionEnd() {
    setCharacter(null);
  }

  useEffect(() => {
    if (character && moviesData.length) {
      setIsModalActive(true);
    }
  }, [character, moviesData.length]);

  return (
    <>
      <Card title="Character list">
        <Flex flow={FlexFlow.COLUMN} gap={sizes.size3}>
          <SearchForm disabled={isLoading} onSubmit={submitSearch} />
          <SearchList
            disabled={isLoading}
            characters={characters.data}
            onListItemClick={setCharacter}
          />
          <Pagination
            disabled={isLoading}
            onChange={setPage}
            pageNumber={page}
            pageCount={getPageCount(characters.data)}
          />
        </Flex>
      </Card>
      <SearchModal
        character={character}
        movies={moviesData}
        isActive={isModalActive}
        onClose={handleModalClose}
        onTransitionEnd={handleModalTransitionEnd}
      />
    </>
  );
};
