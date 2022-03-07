/** @format */

import type { CardProps } from './Card.types';
import React from 'react';
import { Body, Element, Header } from './Card.styles';

export const Card = ({ children, title, ...props }: CardProps) => {
  return (
    <Element {...props}>
      {title && <Header>{title}</Header>}
      <Body>{children}</Body>
    </Element>
  );
};
