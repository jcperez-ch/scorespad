import { createTheme } from '@mui/material/styles';

import { css } from '@emotion/react';

import common from './common';

export default {
  muiTheme: createTheme({
    ...common,
    palette: {
      primary: {
        main: '#BB86FC',
        light: '#c296f8ff',
        dark: '#8e4cdfff',
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: '#00dac6',
        light: '#bffff9ff',
        dark: '#00beabff',
        contrastText: '#121212',
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
      fontFamily: 'Raleway',
      fontSize: 17,
      body1: {
        fontSize: '1.4rem',
      },
      body2: {
        fontWeight: 400,
        fontSize: '1.1rem',
      },
    },
  }),
  globalStyles: css`
    @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
    :root {
      --top-bar-background-color: #1f1f1f;
      --backdrop-background-color: #1f1f1f;
      --top-bar-box-shadow:
        0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
      --top-bar-text-color: #ffffff;

      --button-background-color: #bb86fc;
      --button-active-background-color: #00dac6;
      --button-hover-background-color: #00dac6;
      --button-active-text-color: #bb86fc;
      --button-hover-text-color: #1f1f1f;

      --dialog-close-button-color: #ffffff;

      --fab-default-background-color: #2c2c2c;
      --fab-default-text-color: #E2E2E2;

      --menu-icon-color: #ffffff;

      --text-field-default-border-color: #e2e2e2;
      --text-field-active-border-color: #bb86fc;

      --star-color: #00dac6;

      --game-type-continental: #4caf50;
      --game-type-canasta: #ef5350;
      --game-type-classic-dominoes: #42a5f5;
      --game-type-mexican-train: #ffa726;
      --game-type-other: #78909c;
      --game-type-font-color: #121212;
    }
  `,
};
