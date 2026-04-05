import { createTheme } from '@mui/material/styles';

import { css } from '@emotion/react';

import common from './common';

export default {
  muiTheme: createTheme({
    ...common,
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
      fontFamily: 'Fredoka One',
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
    @import url('https://fonts.googleapis.com/css?family=Fredoka+One');
    :root {
      --top-bar-background-color: #e91e63;
      --backdrop-background-color: #e91e63;
      --top-bar-border: 4px dashed #ffffff;
      --top-bar-text-color: #ffffff;

      --backgrond-image: linear-gradient(to bottom right, #78d7e6, #91d0d6);

      --button-background-color: #e91e63;
      --button-active-background-color: #c2185b;
      --button-hover-background-color: #c2185b;
      --button-active-text-color: #fce4ec;
      --button-hover-text-color: #fce4ec;

      --fab-default-background-color: #fce4ec;
      --fab-default-text-color: #c2185b;

      --menu-icon-color: #c2185b;

      --text-field-default-border-color: rgba(0, 0, 0, 0.42);
      --text-field-active-border-color: #e91e63;

      --star-color: #c2185b;

      --game-type-continental: #e91e63;
      --game-type-canasta: #ab47bc;
      --game-type-classic-dominoes: #5c6bc0;
      --game-type-mexican-train: #ff7043;
      --game-type-other: #8d6e63;
      --game-type-font-color: #ffffff;
    }
  `,
};
