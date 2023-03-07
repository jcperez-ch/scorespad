import React, { useCallback, useMemo, useState } from 'react';
import { Global } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { themes } from 'themes';
import Storage from 'common/Storage';

import ThemeContext from './Context';

export default function ThemeProvider({ initial = 'minimal', children }) {
  const storage = 'theme';
  const [theme, setTheme] = useState(initial);
  const { globalStyles, muiTheme } = themes[theme];
  const handleSetTheme = useCallback((value) => {
    if (window.ga) {
      window.ga('send', 'event', 'UI', 'theme', value);
    }
    setTheme(value);
  }, []);
  return (
    <ThemeContext.Provider value={useMemo(() => [theme, handleSetTheme], [theme, handleSetTheme])}>
      <Storage index={storage} value={theme} />
      <StyledEngineProvider injectFirst>
        <MuiThemeProvider theme={muiTheme}>
          <>
            <Global styles={globalStyles} />
            {children}
          </>
        </MuiThemeProvider>
      </StyledEngineProvider>
    </ThemeContext.Provider>
  );
}
