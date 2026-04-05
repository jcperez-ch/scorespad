export const TARGET_NAME = Symbol('TARGET_NAME');

export function onEnter(cb: () => void, next?: (event: KeyboardEvent) => void) {
  return (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      cb();
    }
    next?.(event);
  };
}

export function onChange(
  cb: (value: string | { [key: string]: string }) => void,
  prop?: string | typeof TARGET_NAME | ((event: React.ChangeEvent<HTMLInputElement>) => void),
  next?: (event: React.ChangeEvent<HTMLInputElement>) => void,
) {
  return (event: React.ChangeEvent<HTMLInputElement>) => {
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
}
