const themeColors = {
  background: ({ theme = {} } = {}) => theme.mui.palette.background.default,
  paperBackground: ({ theme = {} } = {}) => theme.mui.palette.background.paper,
  border: ({ theme = {} } = {}) => theme.mui.palette.divider,
  actionDisabled: ({ theme = {} } = {}) => theme.mui.palette.action.disabled,
  textDisabled: ({ theme = {} } = {}) => theme.mui.palette.text.disabled,
  foregroundOnBackground: ({ theme = {} } = {}) => theme.mui.palette.secondary.main,
  foregroundOnPrimary: ({ theme = {} } = {}) => theme.mui.palette.primary.contrastText,
  foregroundOnSecondary: ({ theme = {} } = {}) => theme.mui.palette.secondary.contrastText,
  primary: ({ theme = {} } = {}) => theme.mui.palette.primary.main,
  primaryDark: ({ theme = {} } = {}) => theme.mui.palette.primary.dark,
  primaryLight: ({ theme = {} } = {}) => theme.mui.palette.primary.light,
  secondary: ({ theme = {} } = {}) => theme.mui.palette.secondary.main,
  secondaryDark: ({ theme = {} } = {}) => theme.mui.palette.secondary.dark,
  secondaryLight: ({ theme = {} } = {}) => theme.mui.palette.secondary.light,
  error: ({ theme = {} } = {}) => theme.mui.palette.error.main,
  errorDark: ({ theme = {} } = {}) => theme.mui.palette.error.dark,
  errorLight: ({ theme = {} } = {}) => theme.mui.palette.error.light,
}

export default themeColors
