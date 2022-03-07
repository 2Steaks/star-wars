/** @format */

import { animated } from 'react-spring';
import { styled, theme } from '@project/theme';
import { Flex } from '@project/components/atoms/Flex';

const animationDuration = 100;

export const Container = styled(animated.div, {
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 999,
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.sizes.size5
});

export const Window = styled(animated.div, {
  backgroundColor: theme.colors.gray9,
  borderRadius: '5px',
  maxWidth: '100%',
  maxHeight: '100%',
  width: theme.sizes.sizemd,
  position: 'relative',

  '& > *': {
    paddingBottom: theme.sizes.size5
  },

  '@md': {
    height: '100%',
    position: 'fixed',
    top: 0,
    left: 0
  }
});

export const FlexContent = styled(Flex, {
  height: '100%'
});

export const Header = styled('header', {
  borderBottom: `1px solid ${theme.colors.gray7}`,
  padding: theme.sizes.size5,
  color: theme.colors.gray1
});

export const Body = styled('div', {
  padding: `0 ${theme.sizes.size5} ${theme.sizes.size5}`,
  marginTop: theme.sizes.size5,
  overflow: 'auto',
  maxHeight: '60vh',

  '@md': {
    maxHeight: '100%'
  }
});

export const Footer = styled('div', {
  borderTop: `1px solid ${theme.colors.gray7}`,
  padding: theme.sizes.size5
});

export const windowAnimConfig = ({
  isActive,
  isTablet,
  ...props
}: {
  isActive: boolean;
  isTablet: boolean;
}) => ({
  opacity: isActive || !isTablet ? 1 : 0,
  transform: `translateY(${isActive || isTablet ? '0rem' : '1rem'})`,
  config: {
    duration: animationDuration
  },
  ...props
});

export const containerAnimConfig = {
  config: {
    duration: animationDuration
  },
  from: { opacity: 0 },
  enter: { opacity: 1 },
  leave: { opacity: 0 }
};
