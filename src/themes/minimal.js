import { createGlobalStyle } from 'styled-components'
import { createTheme } from '@material-ui/core/styles'

const mui = createTheme({
  palette: {
    primary: {
      main: '#2b73bd',
      light: '#558fca',
      dark: '#1e5084',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#03a9f4',
      light: '#35baf6',
      dark: '#0276aa',
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
    useNextVariants: true,
    fontFamily: ['Montserrat Alternates'],
    fontSize: 16,
    body1: {
      fontSize: '1.2rem',
    },
    body2: {
      fontWeight: 400,
      fontSize: '0.75rem',
    },
  },
  overrides: {},
})

export default {
  fonts: ['Montserrat Alternates'],
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
    @import url('https://fonts.googleapis.com/css?family=Montserrat+Alternates:400,500,800&subset=latin-ext');
  `,
}
