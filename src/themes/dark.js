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
      --top-bar-background-color: #1f1f1f;
      --top-bar-box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
      --top-bar-text-color: #ffffff;

      --button-background-color: #1f1f1f;
      --button-active-background-color: #00dac6;
      --button-hover-background-color: #00dac6;
      --button-active-text-color: #1f1f1f;
      --button-hover-text-color: #1f1f1f;

      --dialog-close-button-color: #ffffff;

      --text-field-default-border-color: #e2e2e2;
      --text-field-active-border-color: #bb86fc;

      --star-color: #00dac6;
    }
  `,
};
