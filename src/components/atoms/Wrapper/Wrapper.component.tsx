/** @format */

import type { WrapperProps } from './Wrapper.types';
import React from 'react';
import { Element } from './Wrapper.styles';

export const Wrapper = ({
  children,
  constraint,
  padding,
  ...props
}: WrapperProps) => {
  return (
    <Element
      {...props}
      css={{
        width: constraint,
        padding
      }}
    >
      {children}
    </Element>
  );
};
