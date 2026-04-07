import isLowScoreWins from '@/utils/isLowScoreWins';

import {
  Action,
  AddRoundAction,
  AddScoreAction,
  AddScoresAction,
  CreateGameAction,
  CreateStateAction,
  CreateTeamAction,
  DeletePastRoundAction,
  EndRoundAction,
  ImportGameAction,
  RemoveGameAction,
  RemoveScoreAction,
  RemoveTeamAction,
  RenameGameAction,
  SetGameTypeAction,
  SetParticipantTypeAction,
  SetTeamProfilesAction,
  SetupGameAction,
  UpdateTeamAction,
} from './Actions';
import { Game, StoreState, Team } from './State';

function reduceGames<Payload extends { key: string }>(
  state: StoreState['games'],
  { key, ...payload }: Payload,
  reduceFunction: (game: Game, payload: Omit<Payload, 'key'>) => Game,
): StoreState['games'] {
  if (state[key]) {
    const game = reduceFunction(state[key], payload);
    return game === state[key] ? state : { ...state, [key]: game };
  }
  return state;
}

function reduceTeams<Payload extends object>(
  reduceFunction: (teams: Team[], payload: Payload) => Team[],
): (game: Game, payload: Payload) => Game {
  return (game, payload) => {
    const teams = reduceFunction(game.teams, payload);
    return teams === game.teams ? game : { ...game, teams };
  };
}

function reduceTeam<Payload extends { teamKey: string }>(
  reduceFunction: (team: Team, payload: Omit<Payload, 'teamKey'>) => Team,
): (teams: Team[], payload: Payload) => Team[] {
  return (teams, payload) => {
    const index = teams.findIndex((team) => team.key === payload.teamKey);
    if (index < 0) {
      return teams;
    }
    const { teamKey, ...teamPayload } = payload;
    return teams.map((team) => (team.key === teamKey ? reduceFunction(team, teamPayload) : team));
  };
}

export function createGame(
  state: StoreState['games'],
  { key, name, gameType, participantType }: Omit<CreateGameAction, 'type'>,
): StoreState['games'] {
  const isNameUsed = Object.keys(state).some((gameKey) => state[gameKey].name === name);
  return {
    ...state,
    [key]: {
      name: isNameUsed ? `${name} (${key})` : name,
      gameType,
      participantType,
      round: null,
      teams: [],
      pastRounds: [],
    },
  };
}

export function importGame(
  state: StoreState['games'],
  { key, game }: Omit<ImportGameAction, 'type'>,
): StoreState['games'] {
  return { ...state, [key]: game };
}

export function removeGame(
  state: StoreState['games'],
  { key }: Omit<RemoveGameAction, 'type'>,
): StoreState['games'] {
  return state[key]
    ? Object.keys(state).reduce((games, k) => (k === key ? games : { ...games, [k]: state[k] }), {})
    : state;
}

export function renameGame(state: Game, { name }: Omit<RenameGameAction, 'key' | 'type'>): Game {
  return state.name === name ? state : { ...state, name };
}

export function setGameType(
  state: Game,
  { gameType }: Omit<SetGameTypeAction, 'key' | 'type'>,
): Game {
  if (!isLowScoreWins(gameType)) {
    return { ...state, gameType };
  }
  const hasPositive = state.teams.some((team) =>
    Object.values(team.rounds).some((scores) => scores.some((s) => s > 0)),
  );
  if (hasPositive) {
    return { ...state, gameType };
  }
  return {
    ...state,
    gameType,
    teams: state.teams.map((team) => ({
      ...team,
      rounds: Object.fromEntries(
        Object.entries(team.rounds).map(([key, scores]) => [key, scores.map((s) => Math.abs(s))]),
      ),
    })),
  };
}

export function setParticipantType(
  state: Game,
  { participantType, teamMembers }: Omit<SetParticipantTypeAction, 'key' | 'type'>,
): Game {
  return {
    ...state,
    participantType,
    teams:
      participantType === 'team' && teamMembers
        ? state.teams.map((team) => ({
            ...team,
            ...(teamMembers[team.key] ? { members: teamMembers[team.key] } : {}),
          }))
        : state.teams,
  };
}

export function setTeamProfiles(
  state: Game,
  { teamProfiles }: Omit<SetTeamProfilesAction, 'key' | 'type'>,
): Game {
  return {
    ...state,
    teams: state.teams.map((team) =>
      teamProfiles[team.key] != null ? { ...team, profileKey: teamProfiles[team.key] } : team,
    ),
  };
}

export function setupGame(state: Game, { teams }: Omit<SetupGameAction, 'key' | 'type'>): Game {
  return {
    ...state,
    teams: teams
      .filter((entry) => entry.name !== '')
      .map((entry, index) => {
        const isNameUsed = state.teams.some((team) => team.name === entry.name);
        return {
          name: isNameUsed ? `${entry.name} (${index + 1})` : entry.name,
          key: `${Date.now().toString(36)}-${Math.random().toString(36).substring(2)}`,
          championships: [],
          round: null,
          rounds: {},
          ...(entry.profileKey ? { profileKey: entry.profileKey } : {}),
          ...(entry.members && entry.members.length > 0 ? { members: entry.members } : {}),
        } as Team;
      }),
    round: null,
  };
}

export function addRound(state: Game, { round }: Omit<AddRoundAction, 'key' | 'type'>): Game {
  return state.round === round
    ? state
    : {
        ...state,
        round,
        teams: state.teams.every((team) => Object.keys(team.rounds).includes(round))
          ? state.teams
          : state.teams.map((team) => ({
              ...team,
              rounds: {
                ...team.rounds,
                [round]: [],
              },
            })),
      };
}

export function deletePastRound(
  state: Game,
  { round }: Omit<DeletePastRoundAction, 'key' | 'type'>,
): Game {
  return {
    ...state,
    pastRounds: state.pastRounds.filter((pastRound) => pastRound !== round),
    teams: state.teams.map((team) => ({
      ...team,
      championships: team.championships.filter((championship) => championship !== round),
      rounds: Object.keys(team.rounds).reduce(
        (rounds, key) => (key === round ? rounds : { ...rounds, [key]: team.rounds[key] }),
        {},
      ),
    })),
  };
}

export function endRound(state: Game, { round }: Omit<EndRoundAction, 'key' | 'type'>): Game {
  if (state.round === null) {
    return state;
  }
  const totals = state.teams.map(({ rounds }) =>
    rounds[round].reduce((sum, score) => sum + score, 0),
  );
  const [, ...scores] = totals;
  const isBetter = isLowScoreWins(state.gameType)
    ? (score: number, best: number) => score < best
    : (score: number, best: number) => score > best;
  const winnerIndex = scores.reduce(
    (winner, score, index) => (isBetter(score, totals[winner]) ? index + 1 : winner),
    0,
  );

  return {
    ...state,
    round: null,
    teams: state.teams.map((team, index) =>
      index === winnerIndex ? { ...team, championships: [...team.championships, round] } : team,
    ),
    pastRounds: [...state.pastRounds, round],
  };
}

export function createTeam(
  state: Game,
  { name, profileKey, round, members }: Omit<CreateTeamAction, 'key' | 'type'>,
): Game {
  const { teams } = state;
  const isNameUsed = teams.some((team) => team.name === name);
  return {
    ...state,
    teams: [
      ...teams,
      {
        name: isNameUsed ? `${name} (${teams.length + 1})` : name,
        key: `${Date.now().toString(36)}-${Math.random().toString(36).substring(2)}`,
        championships: [],
        round: null,
        rounds: round == null ? {} : { [round]: [] },
        ...(profileKey ? { profileKey } : {}),
        ...(members && members.length > 0 ? { members } : {}),
      } as Team,
    ],
  };
}

export function removeTeam(state: Game, { teamKey }: Omit<RemoveTeamAction, 'key' | 'type'>): Game {
  const { teams } = state;
  return {
    ...state,
    teams: teams.filter((team) => team.key !== teamKey),
  };
}

export function updateTeam(
  team: Team,
  { name, profileKey, members }: Omit<UpdateTeamAction, 'teamKey' | 'key' | 'type'>,
): Team {
  return { ...team, name, profileKey, members };
}

export function addScores(
  teams: Team[],
  { round, scores }: Omit<AddScoresAction, 'key' | 'type'>,
): Team[] {
  return scores.length === 0
    ? teams
    : teams.map((team) => ({
        ...team,
        rounds: {
          ...team.rounds,
          [round]:
            scores[team.key] == null || Number.isNaN(scores[team.key])
              ? team.rounds[round] || []
              : [...(team.rounds[round] || []), scores[team.key]],
        },
      }));
}

export function addScore(
  team: Team,
  { round, score }: Omit<AddScoreAction, 'teamKey' | 'key' | 'type'>,
): Team {
  return score == null || Number.isNaN(score)
    ? team
    : {
        ...team,
        rounds: {
          ...team.rounds,
          [round]: [...(team.rounds[round] || []), score],
        },
      };
}

export function removeScore(
  team: Team,
  { round, scoreIndex }: Omit<RemoveScoreAction, 'teamKey' | 'key' | 'type'>,
): Team {
  return team.rounds[round][scoreIndex] == null
    ? team
    : {
        ...team,
        rounds: {
          ...team.rounds,
          [round]: team.rounds[round].filter((_, i) => i !== scoreIndex),
        },
      };
}

const reducer = (state: StoreState['games'], { type, ...payload }: Action): StoreState['games'] => {
  switch (type) {
    case '-- --':
      return (payload as Omit<CreateStateAction, 'type'>).games;
    case 'G+':
      return createGame(state, payload as Omit<CreateGameAction, 'type'>);
    case 'G++':
      return importGame(state, payload as Omit<ImportGameAction, 'type'>);
    case 'G-':
      return removeGame(state, payload as Omit<RemoveGameAction, 'type'>);
    case 'G=':
      return reduceGames<Omit<RenameGameAction, 'type'>>(
        state,
        payload as Omit<RenameGameAction, 'type'>,
        renameGame,
      );
    case 'GT':
      return reduceGames<Omit<SetGameTypeAction, 'type'>>(
        state,
        payload as Omit<SetGameTypeAction, 'type'>,
        setGameType,
      );
    case 'GP':
      return reduceGames<Omit<SetParticipantTypeAction, 'type'>>(
        state,
        payload as Omit<SetParticipantTypeAction, 'type'>,
        setParticipantType,
      );
    case 'TP':
      return reduceGames<Omit<SetTeamProfilesAction, 'type'>>(
        state,
        payload as Omit<SetTeamProfilesAction, 'type'>,
        setTeamProfiles,
      );
    case 'G!':
      return reduceGames<Omit<SetupGameAction, 'type'>>(
        state,
        payload as Omit<SetupGameAction, 'type'>,
        setupGame,
      );
    case 'G$':
      return reduceGames<Omit<EndRoundAction, 'type'>>(
        state,
        payload as Omit<EndRoundAction, 'type'>,
        endRound,
      );
    case 'R+':
      return reduceGames<Omit<AddRoundAction, 'type'>>(
        state,
        payload as Omit<AddRoundAction, 'type'>,
        addRound,
      );
    case 'R-':
      return reduceGames<Omit<DeletePastRoundAction, 'type'>>(
        state,
        payload as Omit<DeletePastRoundAction, 'type'>,
        deletePastRound,
      );
    case 'T+':
      return reduceGames<Omit<CreateTeamAction, 'type'>>(
        state,
        payload as Omit<CreateTeamAction, 'type'>,
        createTeam,
      );
    case 'T-':
      return reduceGames<Omit<RemoveTeamAction, 'type'>>(
        state,
        payload as Omit<RemoveTeamAction, 'type'>,
        removeTeam,
      );
    case 'T=':
      return reduceGames<Omit<UpdateTeamAction, 'type'>>(
        state,
        payload as Omit<UpdateTeamAction, 'type'>,
        reduceTeams<Omit<UpdateTeamAction, 'key' | 'type'>>(
          reduceTeam<Omit<UpdateTeamAction, 'key' | 'type'>>(updateTeam),
        ),
      );
    case 'S+':
      return reduceGames<Omit<AddScoreAction, 'type'>>(
        state,
        payload as Omit<AddScoreAction, 'type'>,
        reduceTeams<Omit<AddScoreAction, 'key' | 'type'>>(
          reduceTeam<Omit<AddScoreAction, 'key' | 'type'>>(addScore),
        ),
      );
    case 'S++':
      return reduceGames<Omit<AddScoresAction, 'type'>>(
        state,
        payload as Omit<AddScoresAction, 'type'>,
        reduceTeams(addScores),
      );
    case 'S-':
      return reduceGames<Omit<RemoveScoreAction, 'type'>>(
        state,
        payload as Omit<RemoveScoreAction, 'type'>,
        reduceTeams<Omit<RemoveScoreAction, 'key' | 'type'>>(
          reduceTeam<Omit<RemoveScoreAction, 'key' | 'type'>>(removeScore),
        ),
      );
    default:
      return state;
  }
};

export default reducer;
