import { createMuiTheme } from '@material-ui/core/styles';

const mui = createMuiTheme();

export default {
  colors: {
    background: '#FFFFFF',
    backgroundInverted: '#000000',
    border: mui.palette.divider,
    borderDark: '#666666',
    borderLight: '#CCCCCC',
    brand: '#2A3C8F',
    disabled: '#A2A2A2',
    foregroundOnBackground: '#FF8E00',
    foregroundOnBrand: '#CCCCCC',
    foregroundOnDisabled: '#414141',
    foregroundOnPrimary: '#FFFFFF',
    foregroundOnSecondary: '#CCCCCC',
    primary: '#FF8E00',
    primaryDark: '#CC5A00',
    primaryLight: '#FFBF33',
    secondary: '#02C8A4',
    secondaryDark: '#009571',
    secondaryLight: '#35FBD7',
    error: '#d9534f',
    success: '#8ec348',
    warning: '#f7d117',
  },
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
  mui: createMuiTheme(),
};
