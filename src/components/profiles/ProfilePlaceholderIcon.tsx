import Avatar from '@mui/material/Avatar';

import gameTypeIcons from '@/components/common/icons/gameTypeIcons';
import { GameType } from '@/store/State';

type Props = {
  gameType?: GameType;
};

export default function ProfilePlaceholderIcon({ gameType }: Props) {
  return <Avatar>{gameTypeIcons[gameType ?? 'other']}</Avatar>;
}
