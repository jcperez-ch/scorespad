import aurora from './aurora';
import themeColors from './colors';
import dark from './dark';
import forest from './forest';
import girlish from './girlish';
import minimal from './minimal';
import themeScreenSizes from './screenSizes';

export { themeColors, themeScreenSizes };
export const themes = { aurora, minimal, forest, girlish, dark };

export type ThemeKey = keyof typeof themes;
