/** @format */

import type { SearchModalProps } from './SearchModal.types';
import React from 'react';
import { Modal } from '@project/components/molecules/Modal';
import { MoviesTemplate } from '@project/components/templates/Movies';

export const SearchModal = ({
  character,
  isActive,
  movies,
  ...props
}: SearchModalProps) => {
  return (
    <Modal
      isActive={isActive}
      title={`Movies for ${character?.name}`}
      {...props}
    >
      <MoviesTemplate movies={movies} />
    </Modal>
  );
};
