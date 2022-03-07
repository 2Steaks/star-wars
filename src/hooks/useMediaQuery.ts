/** @format */

import { useDebugValue, useEffect, useState } from 'react';

export type useMediaQueryOptionsType = {
  defaultMatches?: boolean;
  matchMedia?: any;
  noSsr?: boolean;
  ssrMatchMedia?: any;
};

export const useMediaQuery = (
  queryInput: string,
  options: useMediaQueryOptionsType = {}
) => {
  const query = queryInput.replace(/^@media( ?)/m, '');

  // Wait for jsdom to support the match media feature.
  const supportMatchMedia =
    typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined';

  const {
    defaultMatches = false,
    matchMedia = supportMatchMedia ? window.matchMedia : null,
    noSsr = false,
    ssrMatchMedia = null
  } = options;

  const [match, setMatch] = useState(() => {
    if (noSsr && supportMatchMedia) {
      return matchMedia(query).matches;
    }
    if (ssrMatchMedia) {
      return ssrMatchMedia(query).matches;
    }

    // Once the component is mounted, we rely on the
    // event listeners to return the correct matches value.
    return defaultMatches;
  });

  useEffect(() => {
    let isActive = true;

    if (!supportMatchMedia) {
      return undefined;
    }

    const queryList = matchMedia(query);
    const updateMatch = () => {
      // Workaround Safari wrong implementation of matchMedia
      if (isActive) {
        setMatch(queryList.matches);
      }
    };

    updateMatch();
    queryList.addListener(updateMatch);

    return () => {
      isActive = false;
      queryList.removeListener(updateMatch);
    };
  }, [query, matchMedia, supportMatchMedia]);

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useDebugValue({ query, match });
  }

  return match;
};
