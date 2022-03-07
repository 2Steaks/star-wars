/** @format */

import { styled, theme } from '@project/theme';

export const Element = styled('a', {
  color: theme.colors.teal2,
  fontSize: theme.fontSizes.size4,
  textDecoration: 'none',
  '&:hover': {
    color: theme.colors.teal0
  }
});
