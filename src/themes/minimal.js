import { createMuiTheme } from '@material-ui/core/styles';

const mui = createMuiTheme({
  palette: {
    primary: {
      main: '#2b73bd',
      light: '#2b73bd',
      dark: '#2b73bd',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#02C8A4',
      light: '#35FBD7',
      dark: '#009571',
      contrastText: '#CCCCCC',
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
    fontFamily: ['Montserrat Alternates'],
    fontSize: 16,
    body1: {
      fontSize: '1.2rem',
    },
    body2: {
      fontWeight: 400,
    },
  },
});

export default {
  fonts: ['Bree Serif', 'Candal'],
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
};
