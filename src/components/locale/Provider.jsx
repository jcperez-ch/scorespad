import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next/hooks';

import i18n from 'i18n';
import Storage from 'common/Storage';
import Spinner from 'common/Spinner';

const LocaleProvider = ({ children }) => {
  const storage = 'locale';
  useTranslation();

  return (
    <Suspense fallback={Spinner}>
      <Storage index={storage} value={i18n.language} />
      {children}
    </Suspense>
  );
};

export default LocaleProvider;
