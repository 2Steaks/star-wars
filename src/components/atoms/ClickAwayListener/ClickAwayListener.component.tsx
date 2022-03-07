/** @format */

import type { MouseEvent } from 'react';
import React, { cloneElement, useEffect, useRef } from 'react';
import { ownerDocument } from '@project/utils';
import { useEventCallback, useMounted } from '@project/hooks';
import { ClickAwayListenerProps } from './ClickAwayListener.types';

export const ClickAwayListener = ({
  children,
  onClickAway
}: ClickAwayListenerProps) => {
  const isMounted = useMounted();
  const childrenRef = useRef(children.ref);

  const childrenProps = {
    ref: childrenRef
  };

  const handleClickAway = useEventCallback(
    (event: MouseEvent<Document> | any) => {
      const doc = ownerDocument(childrenRef.current);

      if (!isMounted()) {
        return;
      }

      const isInDOM =
        !doc.documentElement.contains(event.target) ||
        childrenRef.current.contains(event.target);

      if (!isInDOM) {
        onClickAway(event);
      }
    }
  );

  useEffect(() => {
    const doc = ownerDocument(childrenRef.current);
    doc.addEventListener('mouseup', handleClickAway);

    return () => {
      doc.removeEventListener('mouseup', handleClickAway);
    };
  }, [handleClickAway]);

  return <>{cloneElement(children, childrenProps)}</>;
};
