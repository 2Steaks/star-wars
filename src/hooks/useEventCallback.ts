/** @format */

import { useCallback, useRef } from 'react';
import { useEnhancedEffect } from './useEnhancedEffect';

export const useEventCallback = <Args extends unknown[], Return>(
  fn: (...args: Args) => Return
): ((...args: Args) => Return) => {
  const ref = useRef(fn);

  useEnhancedEffect(() => {
    ref.current = fn;
  });

  return useCallback(
    (...args: Args) =>
      // @ts-expect-error hide `this`
      // tslint:disable-next-line:ban-comma-operator
      (0, ref.current!)(...args),
    []
  );
};
