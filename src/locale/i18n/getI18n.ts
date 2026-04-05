import { initReactI18next } from 'react-i18next';

import i18n, { Resource } from 'i18next';

import en from './en.json';
import es from './es.json';
import fr from './fr.json';

const getI18n = (initial: string): void => {
  i18n.use(initReactI18next).init({
    fallbackLng: ['es', 'fr', 'en'],
    lng: initial,
    debug: false,
    resources: {
      es: { translation: es },
      en: { translation: en },
      fr: { translation: fr },
    } as Resource,
  });
};

export default getI18n;
