/** @format */

import type { FlexProps } from './Flex.types';
import React from 'react';
import { styled } from '@project/theme';

const BaseComponent = styled('div', {
  display: 'flex',
  variants: {
    wrap: {
      nowrap: {
        flexWrap: 'nowrap'
      },
      wrap: {
        flexWrap: 'wrap'
      },
      'wrap-reverse': {
        flexWrap: 'wrap-reverse'
      }
    },
    flow: {
      column: {
        flexDirection: 'column'
      },
      'column-reverse': {
        flexDirection: 'column-reverse'
      },
      row: {
        flexDirection: 'row'
      },
      'row-reverse': {
        flexDirection: 'row-reverse'
      }
    },
    main: {
      center: {
        justifyContent: 'center'
      },
      'flex-end': {
        justifyContent: 'flex-end'
      },
      'flex-start': {
        justifyContent: 'flex-start'
      },
      'space-between': {
        justifyContent: 'space-between'
      },
      stretch: {
        justifyContent: 'stretch'
      }
    },
    cross: {
      center: {
        alignItems: 'center'
      },
      'flex-end': {
        alignItems: 'flex-end'
      },
      'flex-start': {
        alignItems: 'flex-start'
      },
      stretch: {
        alignItems: 'stretch'
      }
    },
    display: {
      flex: {
        display: 'flex'
      },
      inline: {
        display: 'inline-flex'
      }
    }
  }
});

export const Flex = ({ gap, ...props }: FlexProps) => (
  <BaseComponent css={{ gap }} {...props} />
);
