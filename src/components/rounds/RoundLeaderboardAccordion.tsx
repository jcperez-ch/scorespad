import { use, useContext, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Chip from '@mui/material/Chip';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import styled from '@emotion/styled';

import ParticipantListItemAvatar from '@/components/participants/ParticipantListItemAvatar';
import GamesContext from '@/config/GamesContext';
import ProfilesContext from '@/config/ProfilesContext';
import { removeScore } from '@/store/Actions';
import { GameType, Team, TeamMember } from '@/store/State';

import HeadlineText from '../common/HeadlineText';

const AccordionSummaryContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: calc(var(--mui-spacing) * 1.5);
`;

const AccordionScoresList = styled.ul`
  display: flex;
  gap: var(--mui-spacing);
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
`;

const AccordionScoresItem = styled.li`
  list-style: none;
`;

const StyledAccordionSummaryText = styled.div`
  flex: 1;
  margin-left: calc(var(--mui-spacing) * 1.5);
`;

const AccordionScoresAddButton = styled.button`
  border-radius: calc(var(--mui-spacing) * 2);
  border: none;
  aspect-ratio: 1;
  background-color: var(--mui-palette-action-selected);
  padding: var(--mui-spacing);
  height: calc(var(--mui-spacing) * 4);
  display: flex;
  place-items: center;
  cursor: pointer;

  :focus-visible {
    background-color: rgba(
      var(--mui-palette-action-selectedChannel) /
        calc(var(--mui-palette-action-selectedOpacity) + var(--mui-palette-action-focusOpacity))
    );
    outline: none;
  }

  > svg {
    font-size: 22px; // same size as MUI icons in chips
    color: rgba(var(--mui-palette-text-primaryChannel) / 0.26);
  }
`;

type Props = {
  gameType?: GameType;
  isTeamMode: boolean;
  medalIcon?: React.ReactNode;
  members?: TeamMember[];
  name: Team['name'];
  profileKey?: string;
  roundKey: string;
  readonly?: boolean;
  teamRound: number[];
  teamKey: Team['key'];
};

export default function RoundLeaderboardAccordion({
  gameType,
  isTeamMode,
  medalIcon,
  members,
  name,
  profileKey,
  teamKey,
  readonly = false,
  roundKey,
  teamRound,
}: Props) {
  const { gameKey } = useParams();
  const navigate = useNavigate();
  const [, dispatch] = use(GamesContext);
  const [profiles] = useContext(ProfilesContext);

  const matchedProfile = useMemo(
    () => (profileKey ? profiles[profileKey] : undefined),
    [profiles, profileKey],
  );

  const secondaryText = useMemo(() => {
    if (isTeamMode && members?.length) {
      return members
        .map((m) => (m.profileKey && profiles[m.profileKey]?.name) || m.name)
        .filter(Boolean)
        .join(', ');
    }
    return matchedProfile?.footline;
  }, [isTeamMode, members, profiles, matchedProfile]);

  const nameContent = (
    <>
      {medalIcon != null && <span aria-hidden="true">{medalIcon}</span>}
      <span>{name}</span>
    </>
  );

  if (teamRound.length === 0) {
    return (
      <ListItem
        divider={true}
        secondaryAction={
          <HeadlineText color="primary">
            {teamRound.reduce((sum, score) => sum + score, 0)}
          </HeadlineText>
        }
      >
        <ListItemAvatar>
          <ParticipantListItemAvatar
            gameType={gameType}
            profileKey={profileKey}
            members={members}
            isTeamMode={isTeamMode}
          />
        </ListItemAvatar>
        <ListItemText
          primary={<HeadlineText>{nameContent}</HeadlineText>}
          secondary={secondaryText}
        />
      </ListItem>
    );
  }
  return (
    <Accordion sx={{ width: '100%' }}>
      <AccordionSummary>
        <AccordionSummaryContent>
          <ParticipantListItemAvatar
            gameType={gameType}
            profileKey={profileKey}
            members={members}
            isTeamMode={isTeamMode}
          />
          <StyledAccordionSummaryText>
            <HeadlineText>{nameContent}</HeadlineText>
            {secondaryText && (
              <Typography variant="caption" color="text.secondary">
                {secondaryText}
              </Typography>
            )}
          </StyledAccordionSummaryText>
          <HeadlineText color="primary">
            {teamRound.reduce((sum, score) => sum + score, 0)}
          </HeadlineText>
        </AccordionSummaryContent>
      </AccordionSummary>
      <AccordionDetails>
        <AccordionScoresList>
          {teamRound.map((score, index) => (
            <AccordionScoresItem key={index}>
              <Chip
                key={index}
                label={score}
                onDelete={
                  readonly
                    ? undefined
                    : () => {
                        dispatch(removeScore(gameKey!, roundKey, teamKey!, index));
                      }
                }
              />
            </AccordionScoresItem>
          ))}
          {!readonly && (
            <AccordionScoresItem>
              <AccordionScoresAddButton
                aria-label="Add score"
                onClick={() => {
                  navigate(`/games/${gameKey}/rounds/${roundKey}/team/${teamKey}/score/add`);
                }}
              >
                <AddCircleIcon />
              </AccordionScoresAddButton>
            </AccordionScoresItem>
          )}
        </AccordionScoresList>
      </AccordionDetails>
    </Accordion>
  );
}
