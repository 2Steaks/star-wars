/** @format */

import type { CurriedFunction1 } from 'lodash';
import { curry } from 'lodash';

export const head = <TData>(arr: TData[] = []) => arr[0];

export const sort = <TData>(
  fn: (a: TData, b: TData) => number,
  arr: TData[] = []
) => {
  return [...arr].sort(fn);
};

type Any = {
  <T>(fn: (x: T) => unknown, xs: T[]): boolean;
  <T>(fn: (x: T) => unknown): CurriedFunction1<T[], boolean>;
};

export const any: Any = curry(
  <T>(fn: (x: T) => boolean, xs: readonly T[]): boolean => {
    return xs.some(fn);
  }
);

type All = {
  <T>(fn: (x: T) => unknown, xs: T[]): boolean;
  <T>(fn: (x: T) => unknown): CurriedFunction1<T[], boolean>;
};

export const all: All = curry(
  <T>(fn: (x: T) => boolean, xs: readonly T[]): boolean => {
    return !!xs.length && xs.every(fn);
  }
);
