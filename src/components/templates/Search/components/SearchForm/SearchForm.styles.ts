/** @format */

import { styled, theme } from '@project/theme';
import { Button, Input } from '@project/components';

export const SearchFormInput = styled(Input, {
  height: '100%',
  width: '100%',
  padding: `0 ${theme.sizes.size3}`,
  border: 'none',
  borderRadius: '2px 0 0 2px'
});

export const SearchFormButton = styled(Button, {
  borderRadius: '0 2px 2px 0'
});
