/** @format */

import { globalCss } from '@project/theme';
import { colors } from './colors';
import { fonts, letterSpacings } from './typography';
import { reset } from './reset';

export const globalStyles = globalCss({
  ...reset,
  '*': {
    ...reset['*'],
    fontFamily: fonts.mono,
    fontFeatureSettings: 'kern'
  },
  html: {
    color: colors.gray1,
    fontSize: '62.5%',
    backgroundColor: colors.gray9,
    letterSpacing: letterSpacings.size3
  },
  'html, body, #root': {
    height: '100%'
  },
  '#root': {
    isolation: 'isolate'
  }
});
