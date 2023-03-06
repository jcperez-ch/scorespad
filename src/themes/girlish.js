import { css } from '@emotion/react';
import { createTheme, adaptV4Theme } from '@mui/material/styles';

const muiConfig = {
  palette: {
    primary: {
      main: '#e91e63',
      light: '#f06292',
      dark: '#c2185b',
      contrastText: '#fce4ec',
    },
    secondary: {
      main: '#b50b70',
      light: '#c33b8c',
      dark: '#7e074e',
      contrastText: '#ffffff',
    },
    background: {
      default: '#78d7e6',
      paper: '#fce4ec',
    },
    error: {
      main: '#ffeb3b',
    },
    text: {
      primary: '#ad1457',
      secondary: '#ec407a',
      disabled: '#FD1687',
    },
    divider: 'rgba(0, 0, 0, 0.42)',
  },
  typography: {
    useNextVariants: true,
    fontFamily: ['Fredoka One'],
    fontSize: 17,
    body1: {
      fontSize: '1.4rem',
    },
    body2: {
      fontWeight: 400,
      fontSize: '0.8rem',
    },
  },
};

export default {
  fonts: ['Fredoka One'],
  screenSizes: {
    smallerScreenMin: '321px',
    smallerScreenMax: '480px',
    smallScreenMin: '481px',
    smallScreenMax: '768px',
    mediumScreenMin: '769px',
    mediumScreenMax: '1024px',
    largeScreenMin: '1025px',
    largeScreenMax: '1440px',
    extraLargeScreenMin: '1441px',
  },
  mui: muiConfig,
  muiTheme: createTheme(adaptV4Theme(muiConfig)),
  globalStyles: css`
    @import url('https://fonts.googleapis.com/css?family=Fredoka+One');
  `,
};
