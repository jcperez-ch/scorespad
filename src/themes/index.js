import { get } from 'lodash'

import dark from './dark'
import girlish from './girlish'
import minimal from './minimal'
import themeColors from './colors'
import themeScreenSizes from './screenSizes'

const themeMui = (path) => ({ theme = {} } = {}) => get(theme.mui, path, null)

export { themeColors, themeScreenSizes, themeMui }

export default { minimal, girlish, dark }
