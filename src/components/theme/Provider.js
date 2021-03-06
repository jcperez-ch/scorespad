import React, { useState } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { MuiThemeProvider } from '@material-ui/core/styles'
import themes from 'themes'
import Storage from 'common/Storage'

import ThemeContext from './Context'

const ThemeProvider = ({ initial = 'minimal', children }) => {
  const storage = 'theme'
  const [theme, setTheme] = useState(initial)
  const { globalStyle: Global, ...themeRef } = themes[theme]
  const handleSetTheme = (value) => {
    if (window.ga) {
      window.ga('send', 'event', 'UI', 'theme', value)
    }
    setTheme(value)
  }
  return (
    <ThemeContext.Provider value={[theme, handleSetTheme]}>
      <Storage index={storage} value={theme} />
      <StyledThemeProvider theme={themeRef}>
        <MuiThemeProvider theme={themeRef.mui}>
          <>
            <Global />
            {children}
          </>
        </MuiThemeProvider>
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
