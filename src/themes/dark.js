import { css } from '@emotion/react';
import { createTheme } from '@mui/material/styles';

import common from './common';

export default {
  muiTheme: createTheme({
    ...common,
    palette: {
      primary: {
        main: '#1F1F1F',
        light: '#2F2F2F',
        dark: '#00dac6',
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: '#BB86FC',
        light: '#FFFFFF',
        dark: '#FF0000',
        contrastText: '#BB86FC',
      },
      background: {
        default: '#121212',
        paper: '#1D1D1D',
      },
      error: {
        main: '#FF2222',
      },
      text: {
        primary: '#E2E2E2',
        secondary: '#FFFFFF',
        disabled: '#635985',
      },
      divider: '#E2E2E2',
    },
    typography: {
      useNextVariants: true,
      fontFamily: ['Raleway'],
      fontSize: 17,
      body1: {
        fontSize: '1.4rem',
      },
      body2: {
        fontWeight: 400,
        fontSize: '0.8rem',
      },
    },
  }),
  globalStyles: css`
    @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
    :root {
      --button-color: #00dac6;
      --button-text-color: #1f1f1f;
      --dialog-close-button-color: #ffffff;
      --text-field-default-border-color: #e2e2e2;
      --text-field-active-border-color: #bb86fc;
    }
  `,
};
