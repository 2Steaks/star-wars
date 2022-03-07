/** @format */

import { MouseEvent, ReactNode } from 'react';

export type ModalProps = {
  children: ReactNode | ReactNode[];
  isActive?: boolean;
  isDisabled?: boolean;
  onClose: (event: MouseEvent<Document | HTMLButtonElement>) => void;
  onTransitionEnd?: () => void;
  title?: string;
};
