import { memo } from 'react';

const LocaleStorage = memo(({ index, value }) => {
  window.localStorage.setItem(index, value);
  return null;
});

export default LocaleStorage;
