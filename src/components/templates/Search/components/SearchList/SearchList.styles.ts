/** @format */

import { styled, theme } from '@project/theme';
import { EmpireIcon, Flex } from '@project/components';

export const SearchListItem = styled('li', {
  listStyle: 'none',
  padding: `${theme.sizes.size5} 0`,
  margin: `0 ${theme.sizes.size5}`,
  position: 'relative',
  '&:before': {
    content: '""',
    width: '100%',
    borderBottom: `1px dashed ${theme.colors.teal2}`,
    position: 'absolute',
    bottom: 0,
    left: 0,
    opacity: 0.4
  }
});

export const SearchListFlex = styled(Flex, {
  backgroundColor: theme.colors.gray9,
  borderRadius: '3px',
  maxHeight: '300px',
  height: '80vh',
  overflow: 'auto',
  padding: 0,
  [`${SearchListItem}:last-child:before`]: {
    borderBottom: 'none'
  }
});

export const SearchListIcon = styled(EmpireIcon, {
  opacity: '.05',
  color: theme.colors.teal2
});
