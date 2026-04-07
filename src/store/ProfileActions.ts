import { AvatarType, EmojiAvatar } from './State';

export type CreateProfileAction = {
  type: 'P+';
  key: string;
  name: string;
  footline: string;
  avatarType: AvatarType;
  emoji?: EmojiAvatar;
};

export const createProfile = (
  key: string,
  name: string,
  footline: string,
  avatarType: AvatarType,
  emoji?: EmojiAvatar,
): CreateProfileAction => ({
  type: 'P+',
  key,
  name,
  footline,
  avatarType,
  emoji,
});

export type RemoveProfileAction = {
  type: 'P-';
  key: string;
};

export const removeProfile = (key: string): RemoveProfileAction => ({
  type: 'P-',
  key,
});

export type ProfileAction = CreateProfileAction | RemoveProfileAction;
