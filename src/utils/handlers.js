export const TARGET_NAME = Symbol('TARGET_NAME');

export const onEnter = (cb, next) => (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    cb();
  }
  next?.(event);
};

export const onChange = (cb, prop, next) => (event) => {
  event.preventDefault();
  const { name, value } = event.target;
  const isFunction = typeof prop === 'function';
  if (prop == null || isFunction) {
    cb(value);
  } else {
    cb(prop === TARGET_NAME ? { [name]: value } : { [prop]: value });
  }

  if (isFunction) {
    prop(event);
  } else {
    next?.(event);
  }
};
