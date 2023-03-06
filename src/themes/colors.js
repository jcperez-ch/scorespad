const themeColors = {
  background: ({ theme = {} } = {}) => theme.palette.background.default,
  paperBackground: ({ theme = {} } = {}) => theme.palette.background.paper,
  border: ({ theme = {} } = {}) => theme.palette.divider,
  actionDisabled: ({ theme = {} } = {}) => theme.palette.action.disabled,
  textDisabled: ({ theme = {} } = {}) => theme.palette.text.disabled,
  foregroundOnBackground: ({ theme = {} } = {}) => theme.palette.secondary.main,
  foregroundOnPrimary: ({ theme = {} } = {}) => theme.palette.primary.contrastText,
  foregroundOnSecondary: ({ theme = {} } = {}) => theme.palette.secondary.contrastText,
  primary: ({ theme = {} } = {}) => theme.palette.primary.main,
  primaryDark: ({ theme = {} } = {}) => theme.palette.primary.dark,
  primaryLight: ({ theme = {} } = {}) => theme.palette.primary.light,
  secondary: ({ theme = {} } = {}) => theme.palette.secondary.main,
  secondaryDark: ({ theme = {} } = {}) => theme.palette.secondary.dark,
  secondaryLight: ({ theme = {} } = {}) => theme.palette.secondary.light,
  error: ({ theme = {} } = {}) => theme.palette.error.main,
  errorDark: ({ theme = {} } = {}) => theme.palette.error.dark,
  errorLight: ({ theme = {} } = {}) => theme.palette.error.light,
};

export default themeColors;
