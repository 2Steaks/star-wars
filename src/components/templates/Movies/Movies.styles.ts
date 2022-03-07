/** @format */

import { styled, theme } from '@project/theme';

export const Container = styled('div', {
  color: theme.colors.teal2
});

export const List = styled('ul', {
  padding: 0,
  listStyle: 'none',
  marginBottom: theme.sizes.size8
});

export const ListItem = styled('li', {
  marginBottom: theme.sizes.size1,
  fontSize: theme.fontSizes.size4,
  verticalAlign: 'middle'
});

export const Quote = styled('q', {
  paddingTop: theme.sizes.size2,
  display: 'block'
});
