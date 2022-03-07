/** @format */

import { styled, theme } from '@project/theme';

export const Container = styled('div');

export const Element = styled('input', {
  backgroundColor: theme.colors.gray9,
  color: theme.colors.teal2,
  fontSize: theme.sizes.size4,
  padding: `0 ${theme.sizes.size3}`,
  border: 'none',
  borderRadius: '2px',
  minWidth: '200px',
  outlineOffset: -1,
  '&:focus-visible': {
    outline: `1px solid ${theme.colors.gray4}`
  }
});
