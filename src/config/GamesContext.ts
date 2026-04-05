import { ActionDispatch, createContext } from 'react';

import { Action } from '@/store/Actions';
import { StoreState } from '@/store/State';

export default createContext<[StoreState['games'], ActionDispatch<[Action]>]>([{}, () => {}]);
