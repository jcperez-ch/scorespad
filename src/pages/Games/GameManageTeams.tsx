import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate, useParams } from 'react-router';

import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import DialogOutlet from '@/components/dialog/DialogOutlet';
import TeamsList from '@/components/participants/TeamsList';

type Props = {
  onBack?: () => void;
  onAdd?: () => void;
};

export default function GameManageTeams({ onBack, onAdd }: Props) {
  const navigate = useNavigate();
  const [t] = useTranslation();
  const { gameKey } = useParams();
  const { pathname } = useLocation();
  return (
    <>
      <TeamsList />
      <Stack paddingInline={2} spacing={2} marginBottom={2}>
        <Button
          color="secondary"
          variant="outlined"
          startIcon={<AddIcon />}
          onClick={
            onAdd ??
            (() => {
              navigate('new');
            })
          }
        >
          {t('button.addTeam')}
        </Button>
      </Stack>
      <DialogOutlet
        open={pathname.startsWith(`/games/${gameKey}/teams/new`)}
        navigateToOnClose={onBack ?? `/games/${gameKey}/teams`}
      />
    </>
  );
}
