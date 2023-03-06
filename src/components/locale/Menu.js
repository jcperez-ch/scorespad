import React, { useState, useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Icon from '@mui/material/Icon';
import LocaleContext from 'components/locale/Context';

export default function LocaleMenu() {
  const [el, setEl] = useState(null);
  const [locale, setLocale] = useContext(LocaleContext);
  const handleOpen = ({ currentTarget }) => setEl(currentTarget);
  const handleClose = () => setEl(null);
  const handleClick = (value) => () => {
    setEl(null);
    setLocale(value);
  };
  const items = [
    { id: 'es', label: 'Español' },
    { id: 'en', label: 'English' },
    { id: 'fr', label: 'Français' },
  ];
  return <>
    <IconButton
      color="inherit"
      aria-owns={el ? 'locale-menu' : undefined}
      aria-haspopup="true"
      aria-label="Locale"
      onClick={handleOpen}
      size="large">
      <Icon>g_translate</Icon>
    </IconButton>
    <Menu id="locale-menu" anchorEl={el} open={Boolean(el)} onClose={handleClose}>
      {items.map(({ id, label }) => (
        <MenuItem key={id} selected={id === locale} onClick={handleClick(id)}>
          {label}
        </MenuItem>
      ))}
    </Menu>
  </>;
}
