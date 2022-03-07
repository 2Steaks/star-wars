/** @format */

import type { ReactNode } from 'react';

export type ProgressProps = {
  children?: ReactNode | ReactNode[];
  className?: string;
  color?: string;
  isLoading: boolean;
  max?: string;
  value?: string;
};
