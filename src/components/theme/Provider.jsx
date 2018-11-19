import React, { useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { MuiThemeProvider } from '@material-ui/core/styles';
import themes from 'themes';

import ThemeContext from './Context';

const ThemeProvider = ({ children }) => {
  const themeStore = useState('minimal');
  const [theme] = themeStore;
  const themeRef = themes[theme];
  return (
    <ThemeContext.Provider value={themeStore}>
      <StyledThemeProvider theme={themeRef}>
        <MuiThemeProvider theme={themeRef.mui}>{children}</MuiThemeProvider>
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
