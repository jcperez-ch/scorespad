import React, { useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { MuiThemeProvider } from '@material-ui/core/styles';
import themes from 'themes';
import Storage from 'common/Storage';

import ThemeContext from './Context';

const ThemeProvider = ({ children }) => {
  const storage = 'theme';
  const themeStore = useState(
    window.localStorage.getItem(storage) || 'minimal',
  );
  const [theme] = themeStore;
  const { globalStyle: Global, ...themeRef } = themes[theme];
  return (
    <ThemeContext.Provider value={themeStore}>
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
  );
};

export default ThemeProvider;
