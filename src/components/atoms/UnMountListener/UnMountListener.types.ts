/** @format */

import type { ReactNode } from 'react';

export type UnMountListenerProps = {
  children?: ReactNode | ReactNode[];
  onUnMount: () => void;
};
