/** @format */

import { MouseEvent, ReactNode } from 'react';
import { ButtonType, ButtonVariant } from './Button.constants';

type HTMLComboElement = HTMLButtonElement & HTMLAnchorElement;

export type ButtonProps = {
  children: ReactNode | ReactNode[];
  className?: string;
  disabled?: boolean;
  href?: string;
  onClick?: (event: MouseEvent<HTMLComboElement>) => void;
  variant?: ButtonVariant;
  'data-testid'?: string;
  type?: ButtonType;
};
