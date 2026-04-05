import { createTheme } from '@mui/material/styles';

import { css } from '@emotion/react';

import common from './common';

export default {
  muiTheme: createTheme({
    ...common,
    palette: {
      primary: {
        main: '#097f89ff',
        light: '#2F2F2F',
        dark: '#00dac6',
        contrastText: '#f1fff9',
      },
      secondary: {
        main: '#a7ffff',
        light: '#e8fffe',
        dark: '#065b5c',
        contrastText: '#020000',
      },
      background: {
        default: '#041518',
        paper: 'rgba(4, 21, 24, 0.95)',
      },
      error: {
        main: '#FF2222',
      },
      text: {
        primary: '#a7ffff',
        secondary: '#FFFFFF',
        disabled: '#635985',
      },
      divider: '#a7ffff',
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
      --top-bar-background-color: rgba(4, 21, 24, 0.2);
      --backdrop-background-color: rgba(4, 21, 24, 0.95);
      --top-bar-box-shadow: 0 0 5px #020000, 0 0 20px #02797a, 0 0 30px #3efcff;
      --top-bar-text-color: #f1fff9;

      --backgrond-image: linear-gradient(to bottom right, #041518, #02797a);

      --button-background-color: rgba(41, 172, 195, 0.95);
      --button-active-background-color: rgba(62, 252, 255, 0.5);
      --button-hover-background-color: rgba(62, 252, 255, 0.5);
      --button-active-text-color: #020000;
      --button-hover-text-color: #020000;

      --dialog-close-button-color: #3efcff;

      --fab-default-background-color: rgba(4, 21, 24, 0.9);
      --fab-default-text-color: #a7ffff;

      --menu-icon-color: #a7ffff;

      --text-field-default-border-color: #a7ffff;
      --text-field-active-border-color: #02797a;

      --headline-text-color: #a7ffff;
      --headline-text-shadow: 0 0 5px #02797a, 0 0 10px #02797a, 0 0 15px #3efcff;
      --star-color: #f1fff9;

      --game-type-continental: #00796b;
      --game-type-canasta: #d84315;
      --game-type-classic-dominoes: #0277bd;
      --game-type-mexican-train: #b06c00;
      --game-type-other: #546e7a;
      --game-type-font-color: #ffffff;
    }
  `,
};
