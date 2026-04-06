import { ThemeKey } from '@/themes';

export type Locale = 'en' | 'es' | 'fr';

export type Team = {
  name: string;
  key: string;
  round: string | null;
  championships: string[];
  rounds: Record<string, number[]>; // DEPRECATED
};

export type GameType = 'continental' | 'canasta' | 'classic_dominoes' | 'mexican_train' | 'other';

export type Game = {
  name: string;
  gameType?: GameType;
  teams: Team[];
  round: string | null;
  pastRounds: string[];
};

export type StoreState = {
  games: Record<string, Game>;
  theme: ThemeKey;
  locale: Locale;
};
