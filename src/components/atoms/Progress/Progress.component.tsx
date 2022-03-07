/** @format */

import type { ProgressProps } from './Progress.types';
import React from 'react';
import { Bar, Element, Content } from './Progress.styles';

export const Progress = ({
  children,
  className,
  isLoading = false,
  max = '100',
  value,
  ...props
}: ProgressProps) => {
  return (
    <Element className={className}>
      <Bar max={max} value={value} isLoading={isLoading} {...props} />
      {children ? <Content>{children}</Content> : null}
    </Element>
  );
};
