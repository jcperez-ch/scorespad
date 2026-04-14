import { Suspense, useEffect, useState } from 'react';

import i18n from 'i18next';

import Loading from '@/components/Loading';
import Storage from '@/components/Storage';
import { Locale } from '@/store/State';

import LocaleContext from './LocaleContext';

type Props = {
  initial?: Locale;
  children: React.ReactNode;
};

export default function LocaleProvider({ initial = 'en', children }: Props) {
  const storage = 'locale';
  const localeState = useState<Locale>(initial);
  const [locale] = localeState;
  useEffect(() => {
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale]);

  return (
    <Suspense fallback={<Loading />}>
      <LocaleContext.Provider value={localeState}>
        <Storage index={storage} value={locale} />
        {children}
      </LocaleContext.Provider>
    </Suspense>
  );
}
