import React, { Children } from 'react'
import SlideItem from 'common/SlideItem'

const SlideLongRippleSwitch = ({
  children, active = 0,
}) => {
  const count = Children.count(children)
  return (
    <SlideItem active={active} count={count}>
      {Children.map(children, (child) => (
        <li key={child.key}>{child}</li>
      ))}
    </SlideItem>
  )
}

export default SlideLongRippleSwitch
