/** @format */
import type { MouseEvent, ReactNode } from 'react';

export type ClickAwayListenerProps = {
  children: ReactNode | ReactNode[] | any;
  onClickAway: (event: MouseEvent<Document>) => void;
};
