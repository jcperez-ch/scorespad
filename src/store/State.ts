import { ThemeKey } from '@/themes';

export type Locale = 'en' | 'es' | 'fr';

export type TeamMember = {
  name: string;
  profileKey?: string;
};

export type Team = {
  name: string;
  profileKey?: string;
  key: string;
  round: string | null;
  championships: string[];
  rounds: Record<string, number[]>; // DEPRECATED
  members?: TeamMember[];
};

export type GameType = 'continental' | 'canasta' | 'classic_dominoes' | 'mexican_train' | 'other';

export type ParticipantType = 'player' | 'team';

export type Game = {
  name: string;
  gameType?: GameType;
  participantType?: ParticipantType;
  teams: Team[];
  round: string | null;
  pastRounds: string[];
};

export type AvatarType = 'emoji' | 'initials';
export type EmojiAvatar =
  | 'man-light'
  | 'man-medium'
  | 'man-dark'
  | 'man-blonde'
  | 'woman-light'
  | 'woman-medium'
  | 'woman-dark'
  | 'woman-blonde'
  | 'dog'
  | 'cat'
  | 'elephant'
  | 'butterfly'
  | 'raccoon'
  | 'mouse'
  | 'koala'
  | 'fox'
  | 'pig'
  | 'hamster'
  | 'bear'
  | 'clown'
  | 'monkey-see-no-evil'
  | 'monkey-hear-no-evil'
  | 'monkey-speak-no-evil';

export type Profile = {
  name: string;
  footline: string;
  avatarType: AvatarType;
  emoji?: EmojiAvatar;
};

export type StoreState = {
  games: Record<string, Game>;
  profiles: Record<string, Profile>;
  theme: ThemeKey;
  locale: Locale;
};
