/** @format */

import { styled, theme } from '@project/theme';
import { Flex } from '@project/components/atoms/Flex';

export const FlexFooter = styled(Flex, {
  padding: theme.sizes.size5,
  borderTop: `1px solid ${theme.colors.midnight7}`
});

export const Header = styled('header', {
  padding: theme.sizes.size5,
  position: 'relative'
});

export const Grid = styled('div', {
  display: 'grid',
  gridTemplateRows: 'auto 1fr auto',
  height: '100%'
});
