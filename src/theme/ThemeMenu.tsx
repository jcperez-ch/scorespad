import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';

import ColorLensIcon from '@mui/icons-material/ColorLens';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { ThemeKey } from '@/themes';

import ThemeContext from './ThemeContext';

export default function ThemeMenu() {
  const [el, setEl] = useState<(EventTarget & HTMLButtonElement) | null>(null);
  const [t] = useTranslation();
  const [theme, setTheme] = useContext(ThemeContext);
  const handleOpen = ({ currentTarget }: React.MouseEvent<HTMLButtonElement>) =>
    setEl(currentTarget);
  const handleClose = () => setEl(null);
  const handleClick = (value: ThemeKey) => () => {
    setEl(null);
    setTheme(value);
  };

  const items: { id: ThemeKey; label: string }[] = [
    { id: 'minimal', label: t('skins.minimal') },
    { id: 'aurora', label: t('skins.aurora') },
    { id: 'girlish', label: t('skins.girlish') },
    { id: 'dark', label: t('skins.dark') },
    { id: 'forest', label: t('skins.forest') },
  ];
  return (
    <>
      <IconButton
        color="inherit"
        aria-owns={el ? 'theme-menu' : undefined}
        aria-haspopup="true"
        aria-label="Theme"
        onClick={handleOpen}
        size="medium"
      >
        <ColorLensIcon fontSize="small" />
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
