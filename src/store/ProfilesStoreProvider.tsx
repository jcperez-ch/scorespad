import { useReducer } from 'react';

import Storage from '@/components/Storage';
import ProfilesContext from '@/config/ProfilesContext';

import { StoreState } from './State';
import profileReducer from './profileReducer';

type Props = {
  initial?: StoreState['profiles'];
  children: React.ReactNode;
};

export default function ProfilesStoreProvider({ initial = {}, children }: Props) {
  const profileStore = useReducer(profileReducer, initial);
  const [profileState] = profileStore;
  return (
    <ProfilesContext.Provider value={profileStore}>
      <Storage index="profiles" value={profileState} />
      {children}
    </ProfilesContext.Provider>
  );
}
