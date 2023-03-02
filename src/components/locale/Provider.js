import React, { Suspense, useState, useEffect } from 'react';

import Storage from 'common/Storage';
import Spinner from 'common/Spinner';
import LocaleContext from './Context';

export default function LocaleProvider({ i18n, initial = 'es', children }) {
  const storage = 'locale';
  const localeState = useState(initial);
  const [locale] = localeState;
  useEffect(() => {
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [i18n, locale]);

  return (
    <Suspense fallback={<Spinner />}>
      <LocaleContext.Provider value={localeState}>
        <Storage index={storage} value={locale} />
        {children}
      </LocaleContext.Provider>
    </Suspense>
  );
}
