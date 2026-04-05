import { use } from 'react';

import { LocalizedOptions } from 'date-fns';
import { Locale as DateFnsLocale, enCA, es, fr } from 'date-fns/locale';

import { Locale } from '@/store/State';

import LocaleContext from './LocaleContext';

export default function useLocalizedFormatRelativeOptions(): LocalizedOptions<
  'options' | 'localize' | 'formatLong' | 'formatRelative'
> {
  const [locale] = use(LocaleContext);
  const i18n: Record<Locale, DateFnsLocale> = {
    es,
    fr,
    en: enCA,
  };
  return { locale: i18n[locale] };
}
