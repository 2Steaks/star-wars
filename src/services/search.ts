/** @format */

import Qs from 'qs';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Client } from '@project/utils';
import type {
  Character,
  Movie,
  Planet,
  SearchCharactersQuery,
  SearchResponse,
  Species
} from '@project/types';

/**
 * Search character handler
 */
export const findCharactersByName = (
  { name = '', page = 1 }: SearchCharactersQuery = {},
  { signal }: AxiosRequestConfig = {}
): Promise<AxiosResponse<SearchResponse<Character>>> => {
  return Client.get(`/people/`, {
    params: {
      page,
      search: name
    },
    paramsSerializer: (params) => Qs.stringify(params),
    signal
  });
};

/**
 * Find planet by id handler
 */
export const findPlanetById = (
  id: string,
  { signal }: AxiosRequestConfig = {}
): Promise<AxiosResponse<Planet>> => {
  return Client.get(`/planets/${id}`, {
    signal
  });
};

/**
 * Find species by id handler
 */
export const findSpeciesById = (
  id: string,
  { signal }: AxiosRequestConfig = {}
): Promise<AxiosResponse<Species>> => {
  return Client.get(`/species/${id}`, {
    signal
  });
};

/**
 * Find movie by id handler
 */
export const findMovieById = (
  id: string,
  { signal }: AxiosRequestConfig = {}
): Promise<AxiosResponse<Movie>> => {
  return Client.get(`/films/${id}`, {
    signal
  });
};
