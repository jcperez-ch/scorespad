import { memo } from 'react';

import { set } from 'idb-keyval';

import { store } from '@/store/store';

type Props = {
  index: IDBValidKey;
  value: unknown;
};

function LocalStorage({ index, value }: Props) {
  set(index, value, store);
  return null;
}

export default memo(LocalStorage);
