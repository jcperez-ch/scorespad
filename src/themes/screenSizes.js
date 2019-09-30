const themeScreenSizes = {
  smallerScreenMin: ({ theme = {} } = {}) => theme.screenSizes.smallerScreenMin,
  smallerScreenMax: ({ theme = {} } = {}) => theme.screenSizes.smallerScreenMax,
  smallScreenMin: ({ theme = {} } = {}) => theme.screenSizes.smallScreenMin,
  smallScreenMax: ({ theme = {} } = {}) => theme.screenSizes.smallScreenMax,
  mediumScreenMin: ({ theme = {} } = {}) => theme.screenSizes.mediumScreenMin,
  mediumScreenMax: ({ theme = {} } = {}) => theme.screenSizes.mediumScreenMax,
  largeScreenMin: ({ theme = {} } = {}) => theme.screenSizes.largeScreenMin,
  largeScreenMax: ({ theme = {} } = {}) => theme.screenSizes.largeScreenMax,
  extraLargeScreenMin: ({ theme = {} } = {}) => theme.screenSizes.extraLargeScreenMin,
}

export default themeScreenSizes
