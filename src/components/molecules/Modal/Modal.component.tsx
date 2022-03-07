/** @format */

import type { ModalProps } from './Modal.types';
import React, { useCallback } from 'react';
import { useSpring, useTransition } from 'react-spring';
import { media } from '@project/theme';
import { useMediaQuery } from '@project/hooks';
import { Button, ButtonVariant } from '@project/components/atoms/Button';
import { ClickAwayListener } from '@project/components/atoms/ClickAwayListener';
import {
  Flex,
  FlexCross,
  FlexFlow,
  FlexMain
} from '@project/components/atoms/Flex';
import { Portal } from '@project/components/atoms/Portal';
import { UnMountListener } from '@project/components/atoms/UnMountListener';
import { CrossIcon } from '@project/components/icons/CrossIcon';
import {
  Body,
  Container,
  FlexContent,
  Header,
  Window,
  containerAnimConfig,
  windowAnimConfig
} from './Modal.styles';

export const Modal = ({
  children,
  isActive = false,
  isDisabled = false,
  onClose,
  onTransitionEnd,
  title
}: ModalProps) => {
  const isTablet = useMediaQuery(media.md);
  const transitions = useTransition(isActive, containerAnimConfig);
  const windowAnimation = useSpring(windowAnimConfig({ isActive, isTablet }));
  const handleTransitionEnd = useCallback(() => onTransitionEnd?.(), []);

  return transitions((props, active) => (
    <Portal isDisabled={!active}>
      <UnMountListener onUnMount={handleTransitionEnd} />
      <Container style={props}>
        <ClickAwayListener onClickAway={onClose}>
          <Window style={windowAnimation}>
            <FlexContent flow={FlexFlow.COLUMN}>
              <Header>
                <Flex cross={FlexCross.CENTER} main={FlexMain.SPACE_BETWEEN}>
                  <h1>{title}</h1>
                  <Button
                    disabled={isDisabled}
                    variant={ButtonVariant.NONE}
                    onClick={onClose}
                  >
                    <CrossIcon />
                  </Button>
                </Flex>
              </Header>
              <Body>{children}</Body>
            </FlexContent>
          </Window>
        </ClickAwayListener>
      </Container>
    </Portal>
  ));
};
