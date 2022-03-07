/** @format */

import type { InputProps } from './Input.types';
import React from 'react';
import { useController } from 'react-hook-form';
import { Container, Element } from './Input.styles';

export const Input = ({
  className,
  control,
  'data-testid': dataTestId = 'input',
  disabled = false,
  label,
  name,
  required,
  ...props
}: InputProps) => {
  const controller = useController({
    control,
    defaultValue: '',
    name,
    rules: { required }
  });

  return (
    <Container data-testid={dataTestId} className={className}>
      {label && <label htmlFor={name}>{label}</label>}
      <Element
        data-testid={`${dataTestId}-field`}
        disabled={disabled}
        type="text"
        {...props}
        {...controller.field}
      />
    </Container>
  );
};
