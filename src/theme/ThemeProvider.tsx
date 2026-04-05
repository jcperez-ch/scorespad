import { useMemo, useState } from 'react';

import { ThemeProvider as MuiThemeProvider, StyledEngineProvider } from '@mui/material/styles';

import { Global } from '@emotion/react';

import Storage from '@/components/Storage';
import { ThemeKey, themes } from '@/themes';

import ThemeContext from './ThemeContext';

type Props = {
  initial?: ThemeKey;
  children: React.ReactNode;
};

export default function ThemeProvider({ initial = 'minimal', children }: Props) {
  const storage = 'theme';
  const [theme, setTheme] = useState<ThemeKey>(initial);
  const { globalStyles, muiTheme } = themes[theme];

  return (
    <ThemeContext.Provider value={useMemo(() => [theme, setTheme], [theme, setTheme])}>
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
