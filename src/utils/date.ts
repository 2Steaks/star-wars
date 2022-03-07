/** @format */

export const convertToDate = (isoDate: Date, locale = 'default') => {
  const date = new Date(isoDate);

  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
};
