/** @format */

import { styled, theme } from '@project/theme';

export const Element = styled('div', {
  backgroundColor: theme.colors.gray8,
  borderRadius: '3px',
  boxShadow: '0px 0px 5px 0px rgb(0 0 0 / 50%)'
});

export const Header = styled('div', {
  borderBottom: `1px solid ${theme.colors.gray7}`,
  padding: theme.sizes.size3,
  textTransform: 'uppercase'
});

export const Body = styled('div', {
  padding: theme.sizes.size3
});
