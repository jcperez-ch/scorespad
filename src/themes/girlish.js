import { createGlobalStyle } from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';

const mui = createMuiTheme({
  palette: {
    primary: {
      main: '#ff70b7',
      light: '#ff8cc5',
      dark: '#b24e80',
      contrastText: '#026697',
    },
    secondary: {
      main: '#026697',
      light: '#3484ab',
      dark: '#014769',
      contrastText: '#ff70b7',
    },
    background: {
      default: '#026697',
      paper: '#81D1FF',
    },
    error: {
      main: '#d9534f',
    },
    text: {
      primary: '#ff70b7',
      secondary: '#b24e80',
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
