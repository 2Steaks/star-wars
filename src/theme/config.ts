/** @format */

import { createStitches } from '@stitches/react';
import { colors } from './colors';
import { media } from './media';
import { sizes } from './sizes';
import {
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights
} from './typography';

export const { css, getCssText, globalCss, keyframes, styled, theme } =
  createStitches({
    theme: {
      colors,
      fonts,
      fontSizes,
      fontWeights,
      letterSpacings,
      lineHeights,
      sizes
    },
    media
  });
