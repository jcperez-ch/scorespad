import i18n from 'i18next';
import { initReactI18n } from 'react-i18next/hooks';
import es from './es';
import en from './en';
import fr from './fr';

i18n.use(initReactI18n).init({
  fallbackLng: ['es', 'fr', 'en'],
  lng: window.localStorage.getItem('locale') || 'es',
  debug: process.env.NODE_ENV !== 'production',
  resources: {
    es: { translation: es },
    en: { translation: en },
    fr: { translation: fr },
  },
});

export default i18n;
