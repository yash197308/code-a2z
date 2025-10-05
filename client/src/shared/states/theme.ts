import { atom } from 'jotai';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
  SYSTEM = 'system',
}

const getSystemTheme = (): Theme =>
  window.matchMedia('(prefers-color-scheme: dark)').matches
    ? Theme.DARK
    : Theme.LIGHT;

const savedTheme =
  (localStorage.getItem('theme') as Theme | null) || Theme.SYSTEM;

export const themeAtom = atom<Theme>(savedTheme);

export const resolvedThemeAtom = atom(get => {
  const theme = get(themeAtom);
  return theme === Theme.SYSTEM ? getSystemTheme() : theme;
});
