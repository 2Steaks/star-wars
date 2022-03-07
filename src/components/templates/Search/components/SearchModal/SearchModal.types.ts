/** @format */

import type { Character, Movie } from '@project/types';
import type { ModalProps } from '@project/components/molecules/Modal/Modal.types';

export type SearchModalProps = Omit<ModalProps, 'children'> & {
  character: Character | null;
  movies?: Movie[];
};
