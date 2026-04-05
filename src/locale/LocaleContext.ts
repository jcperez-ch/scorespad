import { Dispatch, SetStateAction, createContext } from 'react';

import { Locale } from '@/store/State';

export type LocaleContextType = [Locale, Dispatch<SetStateAction<Locale>>];

export default createContext<LocaleContextType>(['es', () => {}]);
