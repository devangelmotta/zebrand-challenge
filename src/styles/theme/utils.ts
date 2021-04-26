import { ThemeKeyType } from './slice/types';
import { isServer } from 'utils/ssr';

export const isSystemDark = () => {
  if(isServer) return undefined;
  return window.matchMedia
  ? window.matchMedia('(prefers-color-scheme: dark)')?.matches
  : undefined;
}

export function saveTheme(theme: ThemeKeyType) {
  if(isServer) return;
  window.localStorage && localStorage.setItem('selectedTheme', theme);
}

export function getThemeFromStorage(): ThemeKeyType | null {
  if(isServer) return;
  if(window.localStorage) 
    return (localStorage.getItem('selectedTheme') as ThemeKeyType);
  return null;
}
