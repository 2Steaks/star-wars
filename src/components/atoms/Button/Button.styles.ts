/** @format */

import { styled, theme } from '@project/theme';
import { ButtonVariant } from './Button.constants';

export const Element = styled('button', {
  backgroundColor: 'transparent',
  border: '1px solid transparent',
  borderRadius: '2px',
  padding: `${theme.sizes.size2} ${theme.sizes.size5}`,
  fontSize: theme.fontSizes.size3,
  fontWeight: theme.fontWeights.weight900,
  letterSpacing: theme.letterSpacings.size4,
  textTransform: 'uppercase',
  color: theme.colors.violet2,

  '&:is(:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed'
  },

  '&:not(:disabled)': {
    cursor: 'pointer'
  },

  variants: {
    variant: {
      [ButtonVariant.NONE]: {},
      [ButtonVariant.HOLLOW]: {
        borderColor: theme.colors.violet3,
        backgroundColor: 'transparent',

        '&:not(:disabled):hover': {
          borderColor: theme.colors.violet2,
          color: theme.colors.violet0
        }
      },
      [ButtonVariant.FILLED]: {
        color: theme.colors.violet1,
        backgroundColor: theme.colors.violet4,

        '&:not(:disabled):hover': {
          backgroundColor: theme.colors.violet3,
          color: theme.colors.violet0
        }
      } //mediumpurple
    }
  }
});
