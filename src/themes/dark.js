import { createGlobalStyle } from 'styled-components'
import { createTheme } from '@material-ui/core/styles'

const mui = createTheme({
  palette: {
    primary: {
      main: '#607d8b',
      light: '#ffff00',
      dark: '#78909c',
      contrastText: '#eceff1',
    },
    secondary: {
      main: '#b0bec5',
      light: '#90a4ae',
      dark: '#60748e',
      contrastText: '#cfd8dc',
    },
    background: {
      default: '#212121',
      paper: '#455a64',
    },
    error: {
      main: '#d84315',
    },
    text: {
      primary: '#e0e0e0',
      secondary: '#eeeeee',
      disabled: '#9e9e9e',
    },
    divider: 'rgba(200, 210, 220, 0.42)',
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
})

export default {
  fonts: ['Raleway'],
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
    @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
  `,
}
