import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import CloseIcon from '@mui/icons-material/Close';
import Backdrop from '@mui/material/Backdrop';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import styled from '@emotion/styled';

import LocaleContext from '@/locale/LocaleContext';
import { Locale } from '@/store/State';

const StyledPanel = styled.div`
  background: var(--backdrop-background-color);
  color: var(--top-bar-text-color);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: calc(var(--mui-spacing) * 2) calc(var(--mui-spacing) * 2) var(--mui-spacing);
`;

const StyledListItemButton = styled(ListItemButton)`
  padding: calc(var(--mui-spacing) * 2) calc(var(--mui-spacing) * 3);
`;

type Props = {
  open: boolean;
  onClose: () => void;
};

const items: { id: Locale; label: string }[] = [
  { id: 'es', label: 'Español' },
  { id: 'en', label: 'English' },
  { id: 'fr', label: 'Français' },
];

export default function LocaleBackdrop({ open, onClose }: Props) {
  const [locale, setLocale] = useContext(LocaleContext);
  const [t] = useTranslation();

  const handleClick = (value: Locale) => () => {
    setLocale(value);
    onClose();
  };

  return (
    <Backdrop open={open} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <StyledPanel>
        <StyledHeader>
          <Typography variant="h5" fontWeight="bold">
            {t('settings.changeLocale')}
          </Typography>
          <IconButton color="inherit" onClick={onClose} aria-label="Close">
            <CloseIcon />
          </IconButton>
        </StyledHeader>
        <List>
          {items.map(({ id, label }) => (
            <ListItem key={id} disablePadding>
              <StyledListItemButton
                id={`locale-${id}`}
                selected={id === locale}
                onClick={handleClick(id)}
              >
                <ListItemText primary={label} slotProps={{ primary: { variant: 'h6' } }} />
              </StyledListItemButton>
            </ListItem>
          ))}
        </List>
      </StyledPanel>
    </Backdrop>
  );
}
