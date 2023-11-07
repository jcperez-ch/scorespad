import { css } from '@emotion/react';
import { createTheme } from '@mui/material/styles';

import common from './common';

export default {
  muiTheme: createTheme({
    ...common,
    palette: {
      primary: {
        main: '#020000',
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
        paper: '#05aaa1',
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
      --top-bar-background-color: #020000;
      --top-bar-box-shadow: 0 0 5px #020000, 0 0 20px #02797a, 0 0 30px #3efcff;
      --top-bar-text-color: #f1fff9;
      --backgrond-image: linear-gradient(to bottom right, #041518, #02797a);
      --button-active-background-color: #3efcff;
      --button-hover-background-color: #3efcff;
      --button-active-text-color: #020000;
      --button-hover-text-color: #020000;
      --dialog-close-button-color: #3efcff;
      --text-field-default-border-color: #e2e2e2;
      --text-field-active-border-color: #e8fffe;
      --headline-text-shadow: 0 0 5px #02797a, 0 0 10px #02797a, 0 0 15px #3efcff;
      --star-color: #3efcff;
    }
  `,
};
