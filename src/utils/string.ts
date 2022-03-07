/** @format */

import { curry } from 'lodash';

export const getUrlLastSegment = (path = '') => {
  const cleanPath = path.replace(/\/$/, '');

  return cleanPath.substring(cleanPath.lastIndexOf('/') + 1);
};

export const truncate = curry((length: number, str: string) => {
  return str.length > length ? `${str.substring(0, length)}...` : str;
});
