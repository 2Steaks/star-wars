/** @format */

import type { Movie } from '@project/types';
import { compareDate, truncate } from '@project/utils';

export const compareReleaseDate = compareDate((x: Movie) => x.release_date);

export const truncateHundredFifty = truncate(150);
