import React, { useState } from 'react';
import { useTranslation } from 'react-i18next/hooks';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Icon from '@material-ui/core/Icon';

const LocaleMenu = () => {
  const [el, setEl] = useState(null);
  const [t, i18n] = useTranslation();
  const [locale] = i18n.languages || [];
  const handleOpen = ({ currentTarget }) => setEl(currentTarget);
  const handleClose = () => setEl(null);
  const handleClick = value => () => {
    setEl(null);
    i18n.changeLanguage(value);
    console.log('t', t('messages.selectGame'));
  };
  const items = [
    { id: 'es', label: 'Español' },
    { id: 'en', label: 'English' },
    { id: 'fr', label: 'Français' },
  ];
  return (
    <>
      <IconButton
        color="inherit"
        aria-owns={el ? 'locale-menu' : undefined}
        aria-haspopup="true"
        onClick={handleOpen}
      >
        <Icon>g_translate</Icon>
      </IconButton>
      <Menu
        id="locale-menu"
        anchorEl={el}
        open={Boolean(el)}
        onClose={handleClose}
      >
        {items.map(({ id, label }) => (
          <MenuItem key={id} selected={id === locale} onClick={handleClick(id)}>
            {label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LocaleMenu;
