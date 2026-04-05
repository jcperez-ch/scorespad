import { use, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import ShareIcon from '@mui/icons-material/Share';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import CustomMenuIcon from '@/components/common/CustomMenuIcon';
import DialogConfirm from '@/components/dialog/DialogConfirm';
import GamesContext from '@/config/GamesContext';
import LocaleBackdrop from '@/locale/LocaleBackdrop';
import LocaleMenuItem from '@/locale/LocaleMenuItem';
import { removeGame } from '@/store/Actions';
import ThemeBackdrop from '@/theme/ThemeBackdrop';
import ThemeMenuItem from '@/theme/ThemeMenuItem';

export default function GameMenu() {
  const [, dispatch] = use(GamesContext);
  const { gameKey } = useParams();
  const [el, setEl] = useState<HTMLButtonElement | null>(null);
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
  const [localeOpen, setLocaleOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  const [t] = useTranslation();
  const navigate = useNavigate();
  const handleOpen = ({ currentTarget }: React.MouseEvent<HTMLButtonElement>) =>
    setEl(currentTarget);
  const handleClose = () => setEl(null);
  const goToShareGame = () =>
    navigate(`/games/${gameKey}/share`, { state: { from: `/games/${gameKey}` } });
  const goToUpdateGame = () => {
    handleClose();
    navigate(`/games/${gameKey}/update`, { state: { from: `/games/${gameKey}` } });
  };
  const handleRemove = () => {
    navigate('/');
    dispatch(removeGame(gameKey!));
  };
  return (
    <>
      <IconButton
        color="inherit"
        aria-owns={el ? 'game-menu' : undefined}
        aria-haspopup="true"
        aria-label={t('aria.menu')}
        onClick={handleOpen}
        size="large"
      >
        <SettingsIcon />
      </IconButton>
      <Menu id="game-menu" anchorEl={el} open={Boolean(el)} onClose={handleClose}>
        <MenuItem onClick={goToUpdateGame}>
          <CustomMenuIcon>
            <DriveFileRenameOutlineIcon />
          </CustomMenuIcon>
          <ListItemText>{t('button.rename')}</ListItemText>
        </MenuItem>
        <MenuItem onClick={goToShareGame}>
          <CustomMenuIcon>
            <ShareIcon />
          </CustomMenuIcon>
          <ListItemText>{t('button.share')}</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => {
            setConfirmDeleteOpen(true);
            handleClose();
          }}
        >
          <CustomMenuIcon>
            <DeleteOutlineIcon />
          </CustomMenuIcon>
          <ListItemText>{t('button.delete')}</ListItemText>
        </MenuItem>
        <Divider />
        <LocaleMenuItem
          onClick={() => {
            handleClose();
            setLocaleOpen(true);
          }}
        />
        <ThemeMenuItem
          onClick={() => {
            handleClose();
            setThemeOpen(true);
          }}
        />
      </Menu>
      <LocaleBackdrop open={localeOpen} onClose={() => setLocaleOpen(false)} />
      <ThemeBackdrop open={themeOpen} onClose={() => setThemeOpen(false)} />
      <DialogConfirm
        open={confirmDeleteOpen}
        cancelText={t('button.cancel')}
        confirmText={t('button.delete')}
        onClose={() => setConfirmDeleteOpen(false)}
        title={t('button.deleteGame')}
        subtitle={t('messages.confirmRemoveGame')}
        onConfirm={handleRemove}
      />
    </>
  );
}
