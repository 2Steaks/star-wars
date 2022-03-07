/** @format */

import { styled, theme } from '@project/theme';

export const Element = styled('div', {
  color: theme.colors.teal2,
  cursor: 'pointer',
  variants: {
    disabled: {
      false: {
        '&:hover': {
          color: theme.colors.teal0
        }
      },
      true: {
        cursor: 'not-allowed',
        opacity: 0.6
      }
    }
  }
});

export const Heading = styled('h2');

export const Paragraph = styled('p');
