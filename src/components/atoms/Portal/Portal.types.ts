/** @format */
import { ReactNode } from 'react';

export interface PortalProps {
  children: ReactNode | ReactNode[];
  isDisabled?: boolean;
}
