import { createTheme } from '@mui/material/styles';

import { css } from '@emotion/react';

import common from './common';

export default {
  muiTheme: createTheme({
    ...common,
    palette: {
      primary: {
        main: '#1b5e20',
        light: 'rgb(72, 126, 76)',
        dark: 'rgb(18, 65, 22)',
        contrastText: '#ffffff',
      },
      secondary: {
        main: 'rgb(35, 47, 25)',
        light: 'rgb(72, 126, 76)',
        dark: 'rgb(18, 65, 22)',
        contrastText: 'rgba(0, 0, 0, 0.87)',
      },
      background: {
        default: '#ccff90',
        paper: 'rgb(218, 255, 187)',
      },
      error: {
        main: '#ff1744',
      },
      text: {
        primary: '#000000',
        secondary: '#080808',
        disabled: '#635985',
      },
      divider: 'rgba(0, 69, 2, 1)',
    },
    typography: {
      fontFamily: 'Josefin Sans',
      fontSize: 17,
      body1: {
        fontSize: '1.3rem',
      },
      body2: {
        fontWeight: 400,
        fontSize: '1.1rem',
      },
    },
  }),
  globalStyles: css`
    @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;500;700&display=swap');
    :root {
      --top-bar-background-color: rgba(72, 126, 76, 0.6);
      --backdrop-background-color: rgba(72, 126, 76, 0.95);
      --top-bar-border: 1px solid rgb(118, 255, 3);
      --top-bar-text-color: #ffffff;

      --backgrond-image:
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath d='M15 3 C15 3 8 15 15 25 C10 22 3 15 3 15 C3 15 10 28 20 30 C10 30 2 28 2 28 C2 28 10 38 22 35 C18 40 10 42 10 42 C10 42 22 42 30 35 C30 45 25 55 25 55 C25 55 35 45 35 35 C42 42 50 42 50 42 C50 42 42 40 38 35 C50 38 58 28 58 28 C58 28 50 30 40 30 C50 28 57 15 57 15 C57 15 50 22 45 25 C52 15 45 3 45 3 C45 3 42 15 40 20 C38 10 30 2 30 2 C30 2 22 10 20 20 C18 15 15 3 15 3Z' fill='rgba(0,0,0,0.06)'/%3E%3C/svg%3E")
          repeat,
        linear-gradient(to bottom right, #2d5a27, #1a3a18);

      --button-background-color: rgba(72, 126, 76, 0.6);
      --button-active-background-color: rgb(27, 94, 32);
      --button-hover-background-color: rgb(27, 94, 32);
      --button-active-text-color: #ffffff;
      --button-hover-text-color: #ccff90;

      --dialog-close-button-color: #1b5e20;

      --fab-default-background-color: rgb(218, 255, 187);
      --fab-default-text-color: #1b5e20;

      --menu-icon-color: #1b5e20;

      --text-field-default-border-color: #rgba(72, 126, 76, 0.6);
      --text-field-active-border-color: #1b5e20;

      --headline-text-color: rgb(0, 129, 4);
      // --headline-text-shadow: 0 0 5px #02797a, 0 0 10px #02797a, 0 0 15px #3efcff;
      --star-color: rgb(11, 177, 105);

      --game-type-continental: #2e7d32;
      --game-type-canasta: #c62828;
      --game-type-classic-dominoes: #1565c0;
      --game-type-mexican-train: #e65100;
      --game-type-other: #5d4037;
      --game-type-font-color: #ffffff;
    }
  `,
};
