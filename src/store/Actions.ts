import { Game, GameType, ParticipantType, StoreState, TeamMember } from './State';

export type CreateStateAction = {
  type: '-- --';
  games: StoreState['games'];
};

export const createState = (games: StoreState['games']): CreateStateAction => ({
  type: '-- --',
  games,
});

export type CreateGameAction = {
  type: 'G+';
  key: string;
  name: string;
  gameType: GameType | undefined;
  participantType?: ParticipantType;
};

export const createGame = (
  key: string,
  name: string,
  gameType: GameType | undefined,
  participantType?: ParticipantType,
): CreateGameAction => ({
  type: 'G+',
  key,
  name,
  gameType,
  participantType,
});

export type ImportGameAction = {
  type: 'G++';
  key: string;
  game: Game;
};

export const importGame = (key: string, game: Game): ImportGameAction => ({
  type: 'G++',
  key,
  game,
});

export type RemoveGameAction = {
  type: 'G-';
  key: string;
};

export const removeGame = (key: string): RemoveGameAction => ({
  type: 'G-',
  key,
});

export type RenameGameAction = {
  type: 'G=';
  key: string;
  name: string;
};

export const renameGame = (key: string, name: string): RenameGameAction => ({
  type: 'G=',
  key,
  name,
});

export type SetupTeamEntry = {
  name: string;
  profileKey?: string;
  members?: TeamMember[];
};

export type SetupGameAction = {
  type: 'G!';
  key: string;
  teams: SetupTeamEntry[];
};

export const setupGame = (key: string, teams: SetupTeamEntry[]): SetupGameAction => ({
  type: 'G!',
  key,
  teams,
});

export type EndRoundAction = {
  type: 'G$';
  key: string;
  round: string;
};

export const endRound = (key: string, round: string): EndRoundAction => ({
  type: 'G$',
  key,
  round,
});

export type AddRoundAction = {
  type: 'R+';
  key: string;
  round: string;
};

export const addRound = (key: string, round: string): AddRoundAction => ({
  type: 'R+',
  key,
  round,
});

export type CreateTeamAction = {
  type: 'T+';
  key: string;
  name: string;
  profileKey?: string;
  round?: string;
  members?: TeamMember[];
};

export const createTeam = (
  key: string,
  name: string,
  round?: string,
  members?: TeamMember[],
  profileKey?: string,
): CreateTeamAction => ({
  type: 'T+',
  key,
  name,
  profileKey,
  round,
  members,
});

export type RemoveTeamAction = {
  type: 'T-';
  key: string;
  teamKey: string;
};

export const removeTeam = (key: string, teamKey: string): RemoveTeamAction => ({
  type: 'T-',
  key,
  teamKey,
});

export type UpdateTeamAction = {
  type: 'T=';
  key: string;
  teamKey: string;
  name: string;
  profileKey?: string;
  members?: TeamMember[];
};

export const updateTeam = (
  key: string,
  teamKey: string,
  name: string,
  profileKey?: string,
  members?: TeamMember[],
): UpdateTeamAction => ({
  type: 'T=',
  key,
  teamKey,
  name,
  profileKey,
  members,
});

export type DeletePastRoundAction = {
  type: 'R-';
  key: string;
  round: string;
};

export const deletePastRound = (key: string, round: string): DeletePastRoundAction => ({
  type: 'R-',
  key,
  round,
});

export type AddScoreAction = {
  type: 'S+';
  key: string;
  round: string;
  teamKey: string;
  score: number;
};

export const addScore = (
  key: string,
  round: string,
  teamKey: string,
  score: number,
): AddScoreAction => ({
  type: 'S+',
  key,
  round,
  teamKey,
  score,
});

export type AddScoresAction = {
  type: 'S++';
  key: string;
  round: string;
  scores: Record<string, number>;
};

export const addScores = (
  key: string,
  round: string,
  scores: Record<string, number>,
): AddScoresAction => ({
  type: 'S++',
  key,
  round,
  scores,
});

export type RemoveScoreAction = {
  type: 'S-';
  key: string;
  round: string;
  teamKey: string;
  scoreIndex: number;
};

export const removeScore = (
  key: string,
  round: string,
  teamKey: string,
  scoreIndex: number,
): RemoveScoreAction => ({
  type: 'S-',
  key,
  round,
  teamKey,
  scoreIndex,
});

export type SetGameTypeAction = {
  type: 'GT';
  key: string;
  gameType: GameType;
};

export const setGameType = (key: string, gameType: GameType): SetGameTypeAction => ({
  type: 'GT',
  key,
  gameType,
});

export type SetParticipantTypeAction = {
  type: 'GP';
  key: string;
  participantType: ParticipantType;
  teamMembers?: Record<string, TeamMember[]>;
};

export const setParticipantType = (
  key: string,
  participantType: ParticipantType,
  teamMembers?: Record<string, TeamMember[]>,
): SetParticipantTypeAction => ({
  type: 'GP',
  key,
  participantType,
  teamMembers,
});

export type SetTeamProfilesAction = {
  type: 'TP';
  key: string;
  teamProfiles: Record<string, string>;
};

export const setTeamProfiles = (
  key: string,
  teamProfiles: Record<string, string>,
): SetTeamProfilesAction => ({
  type: 'TP',
  key,
  teamProfiles,
});

export type GameAction =
  | CreateGameAction
  | ImportGameAction
  | RemoveGameAction
  | RenameGameAction
  | SetupGameAction
  | SetGameTypeAction
  | SetParticipantTypeAction
  | SetTeamProfilesAction
  | EndRoundAction
  | AddRoundAction;

export type Action =
  | CreateStateAction
  | GameAction
  | UpdateTeamAction
  | RemoveScoreAction
  | EndRoundAction
  | AddRoundAction
  | CreateTeamAction
  | RemoveTeamAction
  | DeletePastRoundAction
  | AddScoreAction
  | AddScoresAction
  | SetGameTypeAction
  | SetParticipantTypeAction;
