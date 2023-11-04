import { css } from '@emotion/react';
import { createTheme } from '@mui/material/styles';

import common from './common';

export default {
  muiTheme: createTheme({
    ...common,
    palette: {
      primary: {
        main: '#982121',
        light: '#a8b5b2',
        dark: '#434a48',
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: '#F2C2C2',
        light: '#FFFFFF',
        dark: '#B29F9F',
        contrastText: '#ff0000',
      },
      background: {
        default: '#333333',
        paper: '#999999',
      },
      error: {
        main: '#FF4315',
      },
      text: {
        primary: '#452222',
        secondary: '#FFFFFF',
        disabled: '#635985',
      },
      divider: '#872222',
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
      --text-field-default-border-color: #982121;
    }
  `,
};
