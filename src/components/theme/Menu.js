import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Icon from '@mui/material/Icon';
import ThemeContext from './Context';

export default function ThemeMenu() {
  const [el, setEl] = useState(null);
  const [t] = useTranslation();
  const [theme, setTheme] = useContext(ThemeContext);
  const handleOpen = ({ currentTarget }) => setEl(currentTarget);
  const handleClose = () => setEl(null);
  const handleClick = (value) => () => {
    setEl(null);
    setTheme(value);
  };

  const items = [
    { id: 'minimal', label: t('skins.minimal') },
    { id: 'aurora', label: t('skins.aurora') },
    { id: 'girlish', label: t('skins.girlish') },
    { id: 'dark', label: t('skins.dark') },
  ];
  return (
    <>
      <IconButton color="inherit" aria-owns={el ? 'theme-menu' : undefined} aria-haspopup="true" aria-label="Theme" onClick={handleOpen} size="large">
        <Icon>color_lens</Icon>
      </IconButton>
      <Menu id="theme-menu" anchorEl={el} open={Boolean(el)} onClose={handleClose}>
        {items.map(({ id, label }) => (
          <MenuItem key={id} selected={id === theme} onClick={handleClick(id)}>
            {label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
