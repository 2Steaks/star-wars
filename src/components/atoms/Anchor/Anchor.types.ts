/** @format */

import type { ReactNode } from 'react';

export type AnchorProps = {
  children: ReactNode | ReactNode[];
  href: string;
  target?: string;
  rel?: string;
};
