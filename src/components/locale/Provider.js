import React, { Suspense, useState, useEffect } from 'react'

import Storage from 'common/Storage'
import Spinner from 'common/Spinner'
import LocaleContext from './Context'

const LocaleProvider = ({ i18n, initial = 'es', children }) => {
  const storage = 'locale'
  const [locale, setLocale] = useState(initial)
  useEffect(() => {
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale)
    }
  }, [i18n, locale])

  return (
    <Suspense fallback={Spinner}>
      <LocaleContext.Provider value={[locale, setLocale]}>
        <Storage index={storage} value={locale} />
        {children}
      </LocaleContext.Provider>
    </Suspense>
  )
}

export default LocaleProvider
