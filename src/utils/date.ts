/** @format */

import type { StringNumberDate } from '@project/types';

export const convertToDate = (isoDate: Date, locale = 'default') => {
  const date = new Date(isoDate);

  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
};

export const compareDate = <T>(
  fn: (x: T) => StringNumberDate = (x: T) => x as unknown as StringNumberDate
) => {
  return (a: T, b: T): number => {
    return new Date(fn(b)).getTime() - new Date(fn(a)).getTime();
  };
};
