import { useCallback, useContext } from 'react';

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseTheme {
  theme: Theme;
  toggleTheme: () => void;
}

/**
 * Returns an object with the current theme and a function to toggle the theme.
 *
 * @return {UseTheme} An object with the current theme and a function to toggle the theme.
 */

export const useTheme = (): UseTheme => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = useCallback(() => {
    const newTheme: Theme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  }, [theme, setTheme]);

  return {
    theme,
    toggleTheme,
  };
};
