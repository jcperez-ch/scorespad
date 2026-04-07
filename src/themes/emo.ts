import { createTheme } from '@mui/material/styles';

import { css } from '@emotion/react';

import common from './common';

export default {
  muiTheme: createTheme({
    ...common,
    palette: {
      primary: {
        main: '#E4007C',
        light: '#ff4da6',
        dark: '#b0005f',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#B87333',
        light: '#d4955c',
        dark: '#8a5225',
        contrastText: '#ffffff',
      },
      background: {
        default: '#0d0d0d',
        paper: 'rgba(13, 13, 13, 0.95)',
      },
      error: {
        main: '#FF2222',
      },
      text: {
        primary: '#ffb0d9',
        secondary: '#FFFFFF',
        disabled: '#4a3045',
      },
      divider: '#ffb0d9',
    },
    typography: {
      fontFamily: 'Permanent Marker',
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
    @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
    :root {
      --top-bar-background-color: rgba(13, 13, 13, 0.2);
      --backdrop-background-color: rgba(13, 13, 13, 0.95);
      --top-bar-box-shadow: 0 0 5px #0d0d0d, 0 0 20px #b0005f, 0 0 30px #e4007c;
      --top-bar-text-color: #ffffff;

      --backgrond-image: linear-gradient(to bottom right, #0d0d0d, #3d0022);

      --button-background-color: rgba(228, 0, 124, 0.85);
      --button-active-background-color: rgba(255, 77, 166, 0.5);
      --button-hover-background-color: rgba(255, 77, 166, 0.5);
      --button-active-text-color: #ffffff;
      --button-hover-text-color: #ffffff;

      --dialog-close-button-color: #ff4da6;

      --fab-default-background-color: rgba(13, 13, 13, 0.9);
      --fab-default-text-color: #ffb0d9;

      --menu-icon-color: #ffb0d9;

      --text-field-default-border-color: #ffb0d9;
      --text-field-active-border-color: #b87333;

      --headline-text-color: #ff4da6;
      --headline-text-shadow: 0 0 5px #b0005f, 0 0 10px #b0005f, 0 0 15px #e4007c;
      --star-color: #b87333;

      --game-type-continental: #b0005f;
      --game-type-canasta: #b87333;
      --game-type-classic-dominoes: #8a5225;
      --game-type-mexican-train: #d4955c;
      --game-type-other: #4a3045;
      --game-type-font-color: #ffffff;
    }
  `,
};
