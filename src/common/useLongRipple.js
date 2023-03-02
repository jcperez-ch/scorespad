import { useState, useEffect } from 'react';
import { noop } from 'lodash';

const useLongRipple = ({
  onLongPress = noop,
  onClick = noop,
  rippleDelay = 800,
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
  useEffect(() => {
    if (ripple) {
      const timeout = setTimeout(() => {
        setRipple(false);
        onLongPress();
      }, rippleDelay);
      return () => clearTimeout(timeout);
    }
    return noop;
  }, [ripple, onLongPress, rippleDelay]);
  return {
    onMouseDown: handleTouchStart,
    onTouchStart: handleTouchStart,
    onTouchEnd: handleTouchEnd,
    onClick: handleTouchEnd,
  };
};

export default useLongRipple;
