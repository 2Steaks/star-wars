/** @format */

import type { AnchorProps } from './Anchor.types';
import React from 'react';
import { Element } from './Anchor.styles';

export const Anchor = ({ children, ...props }: AnchorProps) => {
  return <Element {...props}>{children}</Element>;
};
