import List from '@mui/material/List';

import FlexExpand from '@/components/common/FlexExpand';
import RoundHistoryItem from '@/components/rounds/RoundHistoryItem';
import usePastRounds from '@/hooks/usePastRounds';

export default function RoundHistory() {
  const pastRounds = usePastRounds();
  return (
    <FlexExpand>
      {pastRounds.length === 0 ? (
        <div>No past rounds available.</div>
      ) : (
        <List sx={{ width: '100%' }}>
          {pastRounds.map((round) => (
            <RoundHistoryItem round={round} key={round} />
          ))}
        </List>
      )}
    </FlexExpand>
  );
}
