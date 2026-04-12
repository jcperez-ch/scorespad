import GameTypeDropdown from '@/components/games/GameTypeDropdown';
import { GameType } from '@/store/State';

type Props = {
  value: GameType | '';
  onChange: (value: GameType) => void;
};

export default function GameMigrationGameType({ value, onChange }: Props) {
  return <GameTypeDropdown value={value} onChange={(v) => onChange(v as GameType)} />;
}
