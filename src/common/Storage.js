import { memo } from 'react';

const LocaleStorage = memo(({ index, value, json = false }) => {
  window.localStorage.setItem(index, json ? JSON.stringify(value) : value);
  return null;
});

export default LocaleStorage;
