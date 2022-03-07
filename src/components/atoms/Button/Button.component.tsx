/** @format */

import type { Ref } from 'react';
import type { ButtonProps } from './Button.types';
import React, { forwardRef } from 'react';
import { ButtonVariant } from './Button.constants';
import { Element } from './Button.styles';

const Component = forwardRef(
  (
    {
      children,
      'data-testid': dataTestId = 'button',
      variant = ButtonVariant.HOLLOW,
      ...props
    }: ButtonProps,
    ref: Ref<HTMLButtonElement>
  ) => {
    return (
      <Element data-testid={dataTestId} ref={ref} variant={variant} {...props}>
        {children}
      </Element>
    );
  }
);

Component.displayName = 'Button';
export const Button = Component;
