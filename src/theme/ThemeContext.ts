import { Dispatch, createContext } from 'react';

import { SetStateAction } from 'jotai';

import { ThemeKey } from '@/themes';

export type LocaleContextType = [ThemeKey, Dispatch<SetStateAction<ThemeKey>>];

export default createContext<LocaleContextType>(['minimal', () => {}]);
