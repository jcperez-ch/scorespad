const themeColors = {
  background: ({ theme = {} } = {}) => theme.background,
  backgroundInverted: ({ theme = {} } = {}) => theme.colors.backgroundInverted,
  border: ({ theme = {} } = {}) => theme.colors.border,
  borderDark: ({ theme = {} } = {}) => theme.colors.borderDark,
  borderLight: ({ theme = {} } = {}) => theme.colors.borderLight,
  brand: ({ theme = {} } = {}) => theme.colors.brand,
  disabled: ({ theme = {} } = {}) => theme.colors.disabled,
  foregroundOnBackground: ({ theme = {} } = {}) =>
    theme.colors.foregroundOnBackground,
  foregroundOnBrand: ({ theme = {} } = {}) => theme.colors.foregroundOnBrand,
  foregroundOnDisabled: ({ theme = {} } = {}) =>
    theme.colors.foregroundOnDisabled,
  foregroundOnPrimary: ({ theme = {} } = {}) =>
    theme.colors.foregroundOnPrimary,
  foregroundOnSecondary: ({ theme = {} } = {}) =>
    theme.colors.foregroundOnSecondary,
  primary: ({ theme = {} } = {}) => theme.colors.primary,
  primaryDark: ({ theme = {} } = {}) => theme.colors.primaryDark,
  primaryLight: ({ theme = {} } = {}) => theme.colors.primaryLight,
  secondary: ({ theme = {} } = {}) => theme.colors.secondary,
  secondaryDark: ({ theme = {} } = {}) => theme.colors.secondaryDark,
  secondaryLight: ({ theme = {} } = {}) => theme.colors.secondaryLight,
  error: ({ theme = {} } = {}) => theme.colors.error,
  success: ({ theme = {} } = {}) => theme.colors.success,
  warning: ({ theme = {} } = {}) => theme.colors.warning,
};

export default themeColors;
