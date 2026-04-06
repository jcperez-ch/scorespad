import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import styled from '@emotion/styled';

import CreatedDate from '@/components/common/CreatedDate';
import { usePastRoundResults } from '@/hooks/usePastRoundResults';

import HeadlineText from '../common/HeadlineText';

const StyledHeadline = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: start;
  gap: 0.25em;
`;

type Props = {
  round: string;
};

export default function RoundHistoryItem({ round }: Props) {
  const [t] = useTranslation();
  const { gameKey } = useParams();
  const navigate = useNavigate();
  const results = usePastRoundResults(round);
  const [winnerResult] = results;

  return (
    <ListItemButton alignItems="center" onClick={() => navigate(`/games/${gameKey}/past/${round}`)}>
      <ListItemText
        primary={
          <StyledHeadline>
            <HeadlineText isDecorative>🥇</HeadlineText>
            <HeadlineText>{winnerResult.team}</HeadlineText>
          </StyledHeadline>
        }
        secondary={
          <>
            <CreatedDate base36Key={round} />
            <br />
            <Typography variant="caption">
              {t('text.totalPoints', {
                totalPoints: winnerResult.scores.reduce((sum, score) => sum + score, 0),
              })}
            </Typography>
          </>
        }
        slotProps={{ secondary: { component: 'div' } }}
      />
      <ChevronRightIcon />
    </ListItemButton>
  );
}
