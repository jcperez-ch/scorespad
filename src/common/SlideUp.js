import React, { forwardRef } from 'react'
import Slide from '@material-ui/core/Slide'

const SlideUp = (props, ref) => <Slide ref={ref} direction="up" {...props} />

export default forwardRef(SlideUp)
