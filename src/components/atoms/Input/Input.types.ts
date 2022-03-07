/** @format */

import type { UseControllerProps } from 'react-hook-form';

export type InputProps = {
  className?: string;
  disabled?: boolean;
  'data-testid'?: string;
  label?: string;
  name: string;
  required?: boolean;
  placeholder?: string;
} & UseControllerProps<any>;
