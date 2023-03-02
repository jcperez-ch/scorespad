import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from './es';
import en from './en';
import fr from './fr';

const getI18n = (initial) => i18n.use(initReactI18next).init({
  fallbackLng: ['es', 'fr', 'en'],
  lng: initial,
  debug: false,
  resources: {
    es: { translation: es },
    en: { translation: en },
    fr: { translation: fr },
  },
});

export default getI18n;
