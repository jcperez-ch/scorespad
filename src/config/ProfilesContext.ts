import { ActionDispatch, createContext } from 'react';

import { ProfileAction } from '@/store/ProfileActions';
import { StoreState } from '@/store/State';

export default createContext<[StoreState['profiles'], ActionDispatch<[ProfileAction]>]>([
  {},
  () => {},
]);
