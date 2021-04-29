import { isServer } from 'utils/ssr';

export const sizes = {
    small: 600,
    medium: 1024,
    large: 1440,
    xlarge: 1920,
  };

export function useMediaQuery(_query) {
  var query = _query;
  if(isServer) return;
  if(typeof query === 'string') query = sizes[query];
  var formatQuery = `(min-width: ${query}px)`
  const media = window.matchMedia(formatQuery);
  return media.matches;
}
