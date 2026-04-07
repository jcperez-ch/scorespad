import Avatar from '@mui/material/Avatar';

import styled from '@emotion/styled';

import { GameType } from '@/store/State';

const placeholderEmoji: Partial<Record<GameType, string>> = {
  continental: '\u{1F0CF}',
  canasta: '\u{1F0CF}',
  classic_dominoes: '\u{1F048}',
  mexican_train: '\u{1F048}',
};

const StyledPlaceholderAvatar = styled(Avatar)`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
`;

type Props = {
  gameType?: GameType;
  name: string;
};

export default function ProfilePlaceholderIcon({ gameType, name }: Props) {
  const emoji = gameType ? placeholderEmoji[gameType] : undefined;
  if (emoji) {
    return <StyledPlaceholderAvatar>{emoji}</StyledPlaceholderAvatar>;
  }
  return <Avatar>{name.charAt(0).toUpperCase()}</Avatar>;
}
