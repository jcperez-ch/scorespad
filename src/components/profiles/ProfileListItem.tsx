import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import DialogConfirm from '@/components/dialog/DialogConfirm';
import { Profile } from '@/store/State';

import ProfileAvatar from './ProfileAvatar';

type Props = {
  profileKey: string;
  onDelete: (key: string) => void;
} & Profile;

export default function ProfileListItem({
  profileKey,
  name,
  footline,
  avatarType,
  emoji,
  onDelete,
}: Props) {
  const [t] = useTranslation();
  const navigate = useNavigate();
  const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const handleMenuClose = () => setMenuAnchor(null);

  return (
    <>
      <ListItem
        secondaryAction={
          <IconButton
            edge="end"
            aria-label={t('button.editProfile')}
            onClick={(e) => setMenuAnchor(e.currentTarget)}
          >
            <MoreHorizIcon color="primary" />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <ProfileAvatar avatarType={avatarType} emoji={emoji} name={name} />
        </ListItemAvatar>
        <ListItemText primary={name} secondary={footline} />
      </ListItem>
      <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={handleMenuClose}>
        <MenuItem
          onClick={() => {
            handleMenuClose();
            navigate(`/profiles/${profileKey}`);
          }}
        >
          <ListItemIcon>
            <EditIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>{t('button.editProfile')}</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleMenuClose();
            setConfirmOpen(true);
          }}
        >
          <ListItemIcon>
            <DeleteIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>{t('button.deleteProfile')}</ListItemText>
        </MenuItem>
      </Menu>
      <DialogConfirm
        open={confirmOpen}
        title={t('title.removeProfile')}
        subtitle={t('messages.confirmRemoveProfile')}
        confirmText={t('button.deleteProfile')}
        cancelText={t('button.cancel')}
        onConfirm={() => {
          onDelete(profileKey);
          setConfirmOpen(false);
        }}
        onClose={() => setConfirmOpen(false)}
      />
    </>
  );
}
