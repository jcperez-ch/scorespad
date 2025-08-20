import { css } from '@emotion/react';
import { createTheme } from '@mui/material/styles';

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
      useNextVariants: true,
      fontFamily: ['Amarante'],
      fontSize: 17,
      body1: {
        fontSize: '1.3rem',
      },
      body2: {
        fontWeight: 400,
      },
    },
  }),
  globalStyles: css`
    @import url('https://fonts.googleapis.com/css2?family=Amarante&display=swap');
    :root {
      --top-bar-background-color: rgba(72, 126, 76, 0.6);
      --top-bar-border: 1px solid rgb(118, 255, 3);
      --top-bar-text-color: #ffffff;

      --backgrond-image: linear-gradient(to bottom right, #ccff90, #76ff03);

      --button-background-color: rgba(72, 126, 76, 0.6);
      --button-active-background-color: rgb(27, 94, 32);
      --button-hover-background-color: rgb(27, 94, 32);
      --button-active-text-color: #ffffff;
      --button-hover-text-color: #ccff90;

      --dialog-close-button-color: #1b5e20;

      --menu-icon-color: #ccff90;

      --text-field-default-border-color: #rgba(72, 126, 76, 0.6);
      --text-field-active-border-color: #1b5e20;

      --headline-text-color: rgb(0, 129, 4);
      // --headline-text-shadow: 0 0 5px #02797a, 0 0 10px #02797a, 0 0 15px #3efcff;
      --star-color: rgb(11, 177, 105);
    }
  `,
};
