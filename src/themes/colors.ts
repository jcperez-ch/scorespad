import { Theme } from '@mui/material';

type ThemeContext = { theme: Theme };

const themeColors = {
  background: (context: ThemeContext) => context?.theme.palette.background.default,
  paperBackground: (context: ThemeContext) => context?.theme.palette.background.paper,
  border: (context: ThemeContext) => context?.theme.palette.divider,
  actionDisabled: (context: ThemeContext) => context?.theme.palette.action.disabled,
  textDisabled: (context: ThemeContext) => context?.theme.palette.text.disabled,
  foregroundOnBackground: (context: ThemeContext) => context?.theme.palette.secondary.main,
  foregroundOnPrimary: (context: ThemeContext) => context?.theme.palette.primary.contrastText,
  foregroundOnSecondary: (context: ThemeContext) => context?.theme.palette.secondary.contrastText,
  primary: (context: ThemeContext) => context?.theme.palette.primary.main,
  primaryDark: (context: ThemeContext) => context?.theme.palette.primary.dark,
  primaryLight: (context: ThemeContext) => context?.theme.palette.primary.light,
  secondary: (context: ThemeContext) => context?.theme.palette.secondary.main,
  secondaryDark: (context: ThemeContext) => context?.theme.palette.secondary.dark,
  secondaryLight: (context: ThemeContext) => context?.theme.palette.secondary.light,
  error: (context: ThemeContext) => context?.theme.palette.error.main,
  errorDark: (context: ThemeContext) => context?.theme.palette.error.dark,
  errorLight: (context: ThemeContext) => context?.theme.palette.error.light,
};

export default themeColors;
