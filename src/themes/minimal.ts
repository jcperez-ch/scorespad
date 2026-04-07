import { createTheme } from '@mui/material/styles';

import { css } from '@emotion/react';

import common from './common';

export default {
  muiTheme: createTheme({
    ...common,
    palette: {
      primary: {
        main: '#2c83cd',
        light: '#558fca',
        dark: '#1e5084',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#03a9f4',
        light: '#35baf6',
        dark: '#0276aa',
        contrastText: '#cccccc',
      },
      background: {
        default: '#f3f3f3',
        paper: '#fff',
      },
      error: {
        main: '#d9534f',
      },
    },
    typography: {
      fontFamily: 'Montserrat Alternates',
      fontSize: 16,
      body1: {
        fontSize: '1.2rem',
      },
      body2: {
        fontWeight: 400,
        fontSize: '1rem',
      },
    },
  }),
  globalStyles: css`
    @import url('https://fonts.googleapis.com/css?family=Montserrat+Alternates:400,500,800&subset=latin-ext');
    :root {
      --top-bar-background-color: #2c83cd;
      --backdrop-background-color: #2c83cd;
      --top-bar-box-shadow:
        0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
      --top-bar-text-color: #ffffff;

      --button-active-background-color: #c2185b;
      --button-hover-background-color: #c2185b;
      --button-active-text-color: #ffffff;
      --button-hover-text-color: #ffffff;

      --fab-default-background-color: #e0e0e0;
      --fab-default-text-color: rgba(0, 0, 0, 0.87);

      --menu-icon-color: #2c83cd;

      --text-field-default-border-color: rgba(0, 0, 0, 0.23);
      --text-field-active-border-color: #2c83cd;

      --star-color: #c2185b;

      --game-type-continental: #2e7d32;
      --game-type-canasta: #c62828;
      --game-type-classic-dominoes: #1565c0;
      --game-type-mexican-train: #e65100;
      --game-type-other: #757575;
      --game-type-font-color: #ffffff;
    }
  `,
};
