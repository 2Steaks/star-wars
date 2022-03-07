/** @format */

import type { UnMountListenerProps } from './UnMountListener.types';
import React, { useEffect } from 'react';

export const UnMountListener = ({
  children,
  onUnMount
}: UnMountListenerProps) => {
  useEffect(() => {
    return onUnMount;
  }, [onUnMount]);

  return children ? <>children</> : null;
};
