import React, { useState, useEffect } from 'react';
import { noop } from 'lodash';

const LongRipple = ({
  component: Cmp,
  onLongPress = noop,
  onClick = noop,
  rippleDelay = 800,
  ...props
}) => {
  const [ripple, setRipple] = useState(null);
  const handleTouchStart = () => setRipple(true);
  const handleTouchEnd = (e) => {
    e.preventDefault();
    if (ripple) {
      onClick(e);
      setRipple(null);
    } else if (ripple === false) {
      setRipple(null);
    }
  };
  useEffect(
    () => {
      if (ripple) {
        const timeout = setTimeout(() => {
          setRipple(false);
          onLongPress();
        }, rippleDelay);
        return () => clearTimeout(timeout);
      }
      return noop;
    },
    [ripple],
  );
  return (
    <Cmp
      {...props}
      onMouseDown={handleTouchStart}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={handleTouchEnd}
    />
  );
};

export default LongRipple;
