import aurora from './aurora';
import dark from './dark';
import emo from './emo';
import forest from './forest';
import girlish from './girlish';
import minimal from './minimal';

export const themes = { aurora, minimal, forest, girlish, dark, emo };

export type ThemeKey = keyof typeof themes;
