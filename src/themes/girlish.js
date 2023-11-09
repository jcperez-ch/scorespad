import { css } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
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
  }),
  globalStyles: css`
    @import url('https://fonts.googleapis.com/css?family=Fredoka+One');
    :root {
      --top-bar-background-color: #e91e63;
      --top-bar-border: 4px dashed #ffffff;
      --top-bar-text-color: #ffffff;

      --backgrond-image: linear-gradient(to bottom right, #78d7e6, #91d0d6);

      --button-background-color: #e91e63;
      --button-active-background-color: #c2185b;
      --button-hover-background-color: #c2185b;
      --button-active-text-color: #fce4ec;
      --button-hover-text-color: #fce4ec;

      --menu-icon-color: #c2185b;

      --star-color: #c2185b;
    }
  `,
};
