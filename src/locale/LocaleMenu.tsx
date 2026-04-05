import { useContext, useState } from 'react';

import TranslateIcon from '@mui/icons-material/Translate';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import LocaleContext from '@/locale/LocaleContext';
import { Locale } from '@/store/State';

export default function LocaleMenu() {
  const [el, setEl] = useState<(EventTarget & HTMLButtonElement) | null>(null);
  const [locale, setLocale] = useContext(LocaleContext);
  const handleOpen = ({ currentTarget }: React.MouseEvent<HTMLButtonElement>) =>
    setEl(currentTarget);
  const handleClose = () => setEl(null);
  const handleClick = (value: Locale) => () => {
    setEl(null);
    setLocale(value);
  };
  const items: { id: Locale; label: string }[] = [
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
        aria-label="Locale"
        onClick={handleOpen}
        size="medium"
      >
        <TranslateIcon fontSize="small" />
      </IconButton>
      <Menu id="locale-menu" anchorEl={el} open={Boolean(el)} onClose={handleClose}>
        {items.map(({ id, label }) => (
          <MenuItem key={id} selected={id === locale} onClick={handleClick(id)}>
            {label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
