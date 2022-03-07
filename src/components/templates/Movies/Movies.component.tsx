/** @format */

import type { MoviesProps } from './Movies.types';
import React from 'react';
import { convertToDate, sort } from '@project/utils';
import { sortByReleaseDateDesc, truncateHundredFifty } from './Movies.utils';
import { Container, List, ListItem, Quote } from './Movies.styles';

export const MoviesTemplate = ({ movies }: MoviesProps) => {
  if (!movies?.length) {
    return null;
  }

  return (
    <Container>
      {sort(sortByReleaseDateDesc, movies).map((movie) => (
        <List key={movie.url}>
          <ListItem>
            {movie.title}: {convertToDate(movie.release_date)}
          </ListItem>
          <ListItem>
            <Quote>{truncateHundredFifty(movie.opening_crawl)}</Quote>
          </ListItem>
        </List>
      ))}
    </Container>
  );
};
