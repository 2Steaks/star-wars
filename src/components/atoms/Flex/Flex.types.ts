/** @format */

import { ReactNode } from 'react';

export type FlexProps = {
  as?: string;
  children: ReactNode | ReactNode[];
  className?: string;
  cross?: 'center' | 'flex-start' | 'flex-end' | 'stretch';
  display?: 'flex' | 'inline';
  flow?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  gap?: number | string;
  main?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'stretch';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
};
