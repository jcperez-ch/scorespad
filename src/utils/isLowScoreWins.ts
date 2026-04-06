import { GameType } from '@/store/State';

const LOW_SCORE_WINS: Set<GameType> = new Set(['continental', 'mexican_train']);

export default function isLowScoreWins(gameType?: GameType): boolean {
  return gameType != null && LOW_SCORE_WINS.has(gameType);
}
