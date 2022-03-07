/** @format */

import { curry } from 'lodash';

export const head = <TData>(arr: TData[] = []) => arr[0];

export const sort = <TData>(
  fn: (a: TData, b: TData) => number,
  arr: TData[] = []
) => {
  return arr.sort(fn);
};

export const all = curry<any, unknown[], boolean>(
  <T>(fn: (x: T) => unknown, xs: T[]): boolean => {
    return !!xs.length && xs.every((x) => fn(x));
  }
);
