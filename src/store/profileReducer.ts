import { CreateProfileAction, ProfileAction, RemoveProfileAction } from './ProfileActions';
import { StoreState } from './State';

function createProfile(
  state: StoreState['profiles'],
  { key, name, footline, avatarType, emoji }: Omit<CreateProfileAction, 'type'>,
): StoreState['profiles'] {
  return { ...state, [key]: { name, footline, avatarType, emoji } };
}

function removeProfile(
  state: StoreState['profiles'],
  { key }: Omit<RemoveProfileAction, 'type'>,
): StoreState['profiles'] {
  if (!state[key]) return state;
  const { [key]: _, ...rest } = state;
  return rest;
}

const profileReducer = (
  state: StoreState['profiles'],
  { type, ...payload }: ProfileAction,
): StoreState['profiles'] => {
  switch (type) {
    case 'P+':
      return createProfile(state, payload as Omit<CreateProfileAction, 'type'>);
    case 'P-':
      return removeProfile(state, payload as Omit<RemoveProfileAction, 'type'>);
    default:
      return state;
  }
};

export default profileReducer;
