import { css } from '@emotion/react';
import { createTheme } from '@mui/material/styles';

import common from './common';

export default {
  muiTheme: createTheme({
    ...common,
    palette: {
      primary: {
        main: '#C147E9',
        light: '#B137D9',
        dark: '#810CA8',
        contrastText: '#E5B8F4',
      },
      secondary: {
        main: '#FFACAC',
        light: '#FFBFA9',
        dark: '#FFEBB4',
        contrastText: '#ff0000',
      },
      background: {
        default: '#18122B',
        paper: '#292043',
      },
      error: {
        main: '#d84315',
      },
      text: {
        primary: '#C060A1',
        secondary: '#9F73AB',
        disabled: '#635985',
      },
      divider: '#FBFFB1',
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
  `,
};
