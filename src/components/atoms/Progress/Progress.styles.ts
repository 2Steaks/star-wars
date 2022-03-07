/** @format */

import { keyframes, styled, theme } from '@project/theme';

const backgroundColor = theme.colors.midnight7;
const barColor = theme.colors.violet3;

const animateLoadingBar = keyframes({
  from: { backgroundPosition: '200% 0' },
  to: { backgroundPosition: '-200% 0' }
});

export const Bar = styled('progress', {
  appearance: 'none',
  position: 'absolute',
  overflow: 'hidden',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  zIndex: 0,
  borderRadius: '10px',

  '&::-webkit-progress-bar': {
    backgroundColor
  },

  '&::-webkit-progress-value': {
    backgroundColor: barColor
  },

  '&:indeterminate': {
    animation: `${animateLoadingBar} 1500ms linear infinite`,
    backgroundColor,
    backgroundImage: `linear-gradient(
      to right, 
      ${barColor} 30%, 
      ${backgroundColor} 30%
    )`,
    backgroundPosition: 'top left',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '150% 150%',

    '&::-webkit-progress-bar': {
      backgroundColor: 'transparent'
    }
  },
  variants: {
    isLoading: {
      false: {
        '&:indeterminate': {
          backgroundImage: 'none'
        }
      }
    }
  }
});

export const Element = styled('div', {
  position: 'absolute',
  bottom: 0,
  left: 0,
  height: 1,
  width: '100%'
});

export const Content = styled('span', {
  color: 'white',
  display: 'block',
  position: 'relative',
  padding: `calc(${theme.sizes.size5} / 2)`,
  zIndex: 1,
  textAlign: 'center',
  fontSize: '1.2rem'
});
