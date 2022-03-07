/** @format */

import type { ReactNode } from 'react';
import { Breakpoints } from '@project/constants';

export type WrapperProps = {
  children: ReactNode | ReactNode[];
  className?: string;
  constraint?: Breakpoints;
  padding?: string;
};
