/** @format */

import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useEnhancedEffect } from '@project/hooks';
import { PortalProps } from './Portal.types';

export const Portal = ({ children, isDisabled = false }: PortalProps) => {
  const [mountNode, setMountNode] = useState<HTMLElement | null>(null);

  useEnhancedEffect(() => {
    setMountNode(!isDisabled ? document.body : null);
  }, [isDisabled]);

  return mountNode ? createPortal(children, mountNode) : mountNode;
};
