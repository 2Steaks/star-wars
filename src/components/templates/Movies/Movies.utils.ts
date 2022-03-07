/** @format */

import type { Movie } from '@project/types';
import { truncate } from '@project/utils';

export const sortByReleaseDateDesc = (a: Movie, b: Movie) => {
  const aRelease = new Date(a.release_date).getTime();
  const bRelease = new Date(b.release_date).getTime();
  return bRelease - aRelease;
};

export const truncateHundredFifty = truncate(150);
