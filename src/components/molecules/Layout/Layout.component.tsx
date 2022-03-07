/** @format */

import type { LayoutProps } from './Layout.types';
import React from 'react';
import { useIsFetching } from 'react-query';
import { media, sizes } from '@project/theme';
import { useMediaQuery } from '@project/hooks';
import {
  Anchor,
  DeathStarIcon,
  Flex,
  FlexCross,
  FlexFlow,
  FlexMain,
  GithubIcon,
  Progress,
  Wrapper
} from '@project/components';
import { FlexFooter, Grid, Header } from './Layout.styles';

export const Layout = ({ children }: LayoutProps) => {
  const isFetching = useIsFetching();
  const isTablet = useMediaQuery(media.md);

  return (
    <Grid>
      <Header>
        <DeathStarIcon size={isTablet ? sizes.size8 : sizes.size9} />
        <Progress isLoading={!!isFetching} />
      </Header>
      <Flex
        as="main"
        flow={FlexFlow.COLUMN}
        main={FlexMain.CENTER}
        cross={FlexCross.CENTER}
      >
        <Wrapper constraint={sizes.sizelg} padding={sizes.size5}>
          {children}
        </Wrapper>
      </Flex>
      <FlexFooter main={FlexMain.FLEX_END}>
        <Anchor
          href="https://github.com/2Steaks/star-wars"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Flex gap={10} cross={FlexCross.CENTER}>
            <GithubIcon size={15} /> <span>Ben Simpson</span>
          </Flex>
        </Anchor>
      </FlexFooter>
    </Grid>
  );
};
