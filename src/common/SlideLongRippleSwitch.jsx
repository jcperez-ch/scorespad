import React from 'react';
import Slide from '@material-ui/core/Slide';
import LongRipple from 'common/LongRipple';
import SlideItem from 'common/SlideItem';

const SlideLongRippleSwitch = ({
  children,
  setOn,
  on,
  onPress,
  render = null,
  rippleComponent: Cmp,
  rippleProps = {},
  transitionDuration = 250,
}) => (
  <SlideItem>
    <Slide
      in={!on}
      direction="right"
      timeout={transitionDuration}
      unmountOnExit
    >
      <LongRipple
        component={Cmp}
        onLongPress={setOn}
        onClick={onPress}
        {...rippleProps}
      >
        {children}
      </LongRipple>
    </Slide>
    <Slide in={on} direction="left" timeout={transitionDuration} unmountOnExit>
      {render}
    </Slide>
  </SlideItem>
);

export default SlideLongRippleSwitch;
