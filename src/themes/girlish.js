import { createGlobalStyle } from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';

const mui = createMuiTheme({
  palette: {
    primary: {
      main: '#e91e63',
      light: '#f06292',
      dark: '#c2185b',
      contrastText: '#f8bbd0',
    },
    secondary: {
      main: '#2196f3',
      light: '#64b5f6',
      dark: '#1e88e5',
      contrastText: '#1a237e',
    },
    background: {
      default: '#f8bbd0',
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
});

export default {
  fonts: ['Fredoka One'],
  screenSizes: {
    smallerScreenMin: '321px',
    smallerScreenMax: '480px',
    smallScreenMin: '481px',
    smallScreenMax: '768px',
    mediumScreenMin: '769px',
    mediumScreenMax: '1024px',
    largeScreenMin: '1025px',
    largeScreenMax: '1440px',
    extraLargeScreenMin: '1441px',
  },
  mui,
  globalStyle: createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Fredoka+One');
  `,
};
