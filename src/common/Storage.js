import { memo } from 'react';
import { set } from 'idb-keyval';
import { store } from 'utils/store';

function LocalStorage({ index, value }) {
  set(index, value, store);
  return null;
}

export default memo(LocalStorage);
