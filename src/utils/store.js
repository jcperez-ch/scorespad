import { createStore, get } from 'idb-keyval';

export const store = createStore('scorespad-db', 'scorespad-store');

export const getInitialState = async () => {
  let [games, theme, locale] = await Promise.all([get('gms', store), get('theme', store), get('locale', store)]);

  if (window.localStorage) {
    const browserGames = window.localStorage.getItem('gms');
    const browserTheme = window.localStorage.getItem('theme');
    const browserLocale = window.localStorage.getItem('locale');
    if (!games && browserGames) {
      games = JSON.parse(browserGames || '{}');
    }
    if (!theme && browserTheme) {
      theme = browserTheme;
    }
    if (!theme && browserLocale) {
      locale = browserLocale;
    }
    if (browserGames != null || browserTheme != null || browserLocale != null) {
      window.localStorage.clear();
    }
  }

  return { games, theme, locale };
};
