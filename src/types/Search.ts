/** @format */

export type SearchCharactersQuery = { name?: string; page?: number };

export type SearchResponse<T> = {
  count: number;
  next?: string;
  previous?: string;
  results: T[];
};
