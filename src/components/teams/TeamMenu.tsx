import { use, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import styled from '@emotion/styled';

import DialogConfirm from '@/components/dialog/DialogConfirm';
import GamesContext from '@/config/GamesContext';
import { removeTeam } from '@/store/Actions';

const StyledMenuIcon = styled(ListItemIcon)`
  color: var(--menu-icon-color);
`;

type Props = {
  teamKey: string;
  teamName: string;
};

export default function TeamMenu({ teamKey, teamName }: Props) {
  const [t] = useTranslation();
  const navigate = useNavigate();
  const { gameKey } = useParams();
  const [, dispatch] = use(GamesContext);
  const [el, setEl] = useState<HTMLButtonElement | null>(null);
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
  const handleOpen = ({ currentTarget }: React.MouseEvent<HTMLButtonElement>) =>
    setEl(currentTarget);
  const handleClose = () => setEl(null);

  return (
    <>
      <IconButton
        color="secondary"
        aria-owns={el ? 'team-menu' : undefined}
        aria-haspopup="true"
        aria-label={t('aria.menu')}
        onClick={handleOpen}
        size="large"
      >
        <MoreVertIcon />
      </IconButton>
      <Menu id="team-menu" anchorEl={el} open={Boolean(el)} onClose={handleClose}>
        <MenuItem onClick={() => navigate(`/games/${gameKey}/update/${teamKey}`)}>
          <StyledMenuIcon>
            <DriveFileRenameOutlineIcon />
          </StyledMenuIcon>
          <ListItemText>{t('button.rename')}</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => {
            setConfirmDeleteOpen(true);
            handleClose();
          }}
        >
          <StyledMenuIcon>
            <DeleteOutlineIcon />
          </StyledMenuIcon>
          <ListItemText>{t('button.delete')}</ListItemText>
        </MenuItem>
      </Menu>
      <DialogConfirm
        open={confirmDeleteOpen}
        cancelText={t('button.cancel')}
        confirmText={t('button.delete')}
        onClose={() => setConfirmDeleteOpen(false)}
        title={t('button.deleteGame')}
        subtitle={t('messages.confirmRemoveTeam', { teamName })}
        onConfirm={() => dispatch(removeTeam(gameKey!, teamKey))}
      />
    </>
  );
}
