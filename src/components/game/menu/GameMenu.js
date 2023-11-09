import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Icon from '@mui/material/Icon';

const StyledMenuIcon = styled(Icon)`
  color: var(--menu-icon-color);
`;

export default function GameMenu() {
  const { gameKey } = useParams();
  const [el, setEl] = useState(null);
  const [t] = useTranslation();
  const navigate = useNavigate();
  const handleOpen = ({ currentTarget }) => setEl(currentTarget);
  const handleClose = () => setEl(null);
  const goToShareTeam = () => navigate(`/share/${gameKey}`, { state: { from: `/games/${gameKey}` } });
  return (
    <>
      <IconButton color="inherit" aria-owns={el ? 'theme-menu' : undefined} aria-haspopup="true" aria-label="Theme" onClick={handleOpen} size="large">
        <Icon>settings</Icon>
      </IconButton>
      <Menu id="theme-menu" anchorEl={el} open={Boolean(el)} onClose={handleClose}>
        <MenuItem onClick={() => {}}>
          <ListItemIcon>
            <StyledMenuIcon>drive_file_rename_outline</StyledMenuIcon>
          </ListItemIcon>
          <ListItemText>{t('button.rename')}</ListItemText>
        </MenuItem>
        <MenuItem onClick={goToShareTeam}>
          <ListItemIcon>
            <StyledMenuIcon>share</StyledMenuIcon>
          </ListItemIcon>
          <ListItemText>{t('button.share')}</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
}
