/** @format */

import type { Character, SearchResponse } from '@project/types';
import { all, getUrlLastSegment } from '@project/utils';

const PAGE_LIMIT = 10;

const getCount = (data?: SearchResponse<Character>) => data?.count ?? 0;

export const getPageCount = (data?: SearchResponse<Character>) =>
  Math.round(getCount(data) / PAGE_LIMIT);

export const mapMovieIds = (movies: string[] = []) => {
  return movies.map(getUrlLastSegment);
};

export const isLoadingQueries = all(
  (query: { isLoading: boolean }) => query.isLoading
);

export function getAllData<T extends { data: unknown }>(xs: T[]): T['data'][] {
  const reducer = (accumulator: T['data'][], x: T) => {
    return x.data ? [...accumulator, x.data] : accumulator;
  };

  return xs.reduce(reducer, []);
}
