import Avatar from '@mui/material/Avatar';

import styled from '@emotion/styled';

import { AvatarType, EmojiAvatar } from '@/store/State';

const emojiMap: Record<EmojiAvatar, string> = {
  'man-light': '\u{1F468}\u{1F3FB}',
  'man-medium': '\u{1F468}\u{1F3FD}',
  'man-dark': '\u{1F468}\u{1F3FF}',
  'man-blonde': '\u{1F471}\u200D\u2642\uFE0F',
  'woman-light': '\u{1F469}\u{1F3FB}',
  'woman-medium': '\u{1F469}\u{1F3FD}',
  'woman-dark': '\u{1F469}\u{1F3FF}',
  'woman-blonde': '\u{1F471}\u200D\u2640\uFE0F',
  dog: '\u{1F436}',
  cat: '\u{1F431}',
  elephant: '\u{1F418}',
  butterfly: '\u{1F98B}',
  raccoon: '\u{1F99D}',
  mouse: '\u{1F42D}',
  koala: '\u{1F428}',
  fox: '\u{1F98A}',
  pig: '\u{1F437}',
  hamster: '\u{1F439}',
  bear: '\u{1F43B}',
  clown: '\u{1F921}',
  'monkey-see-no-evil': '\u{1F648}',
  'monkey-hear-no-evil': '\u{1F649}',
  'monkey-speak-no-evil': '\u{1F64A}',
};

const StyledEmojiAvatar = styled(Avatar)`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
`;

type Props = {
  avatarType: AvatarType;
  emoji?: EmojiAvatar;
  name: string;
};

export default function ProfileAvatar({ avatarType, emoji, name }: Props) {
  if (avatarType === 'emoji' && emoji) {
    return <StyledEmojiAvatar>{emojiMap[emoji]}</StyledEmojiAvatar>;
  }
  return <Avatar>{name.charAt(0).toUpperCase()}</Avatar>;
}
