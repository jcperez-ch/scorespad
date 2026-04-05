import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Chip from '@mui/material/Chip';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import styled from '@emotion/styled';
import { formatRelative } from 'date-fns';

import InlineList from '@/components/common/InlineList';
import useLocalizedFormatRelativeOptions from '@/locale/useLocalizedFormatRelativeOptions';
import { GameType, Team } from '@/store/State';
import gameTypeColors from '@/utils/gameTypeColors';

const StyledSecondary = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.2rem;
`;

const StyledLeader = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.15rem;
`;

function findLeaders(teams: Team[], pastRounds: string[]): Set<string> {
  if (pastRounds.length === 0 || teams.length < 2) return new Set();
  const maxWins = Math.max(...teams.map((t) => t.championships.length));
  if (maxWins === 0) return new Set();
  return new Set(teams.filter((t) => t.championships.length === maxWins).map((t) => t.key));
}

type Props = {
  onClick: (id: string) => void;
  gameKey: string;
  name: string;
  gameType: GameType;
  teams: Team[];
  pastRounds: string[];
};

export default function GameListItem({
  onClick,
  gameKey,
  name,
  gameType,
  teams,
  pastRounds,
}: Props) {
  const [t] = useTranslation();
  const formatOptions = useLocalizedFormatRelativeOptions();
  const leaderKeys = useMemo(() => findLeaders(teams, pastRounds), [teams, pastRounds]);

  return (
    <ListItemButton alignItems="center" onClick={() => onClick(gameKey)} sx={{ py: 1 }}>
      <ListItemText
        primary={name}
        secondary={
          <StyledSecondary>
            <Typography variant="caption">
              {t('messages.createdAt', {
                date: formatRelative(new Date(parseInt(gameKey, 36)), new Date(), formatOptions),
              })}
            </Typography>
            <Typography variant="caption">
              {teams.length > 0 ? (
                <InlineList>
                  {teams.map((team) =>
                    leaderKeys.has(team.key) ? (
                      <StyledLeader key={team.key}>
                        {team.name}
                        <span role="img" aria-label={t('navigation.currentLeader')}>
                          🥇
                        </span>
                      </StyledLeader>
                    ) : (
                      team.name
                    ),
                  )}
                </InlineList>
              ) : (
                t('text.noTeamsShort')
              )}
            </Typography>
            {gameType && (
              <Chip
                label={t(`gameType.${gameType}`)}
                size="small"
                sx={{
                  backgroundColor: gameTypeColors[gameType],
                  color: 'var(--game-type-font-color)',
                  fontSize: '0.65rem',
                  borderRadius: 1,
                  height: 20,
                  alignSelf: 'flex-start',
                }}
              />
            )}
          </StyledSecondary>
        }
        slotProps={{ secondary: { component: 'div' } }}
      />
      <ChevronRightIcon />
    </ListItemButton>
  );
}
