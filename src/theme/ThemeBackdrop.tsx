import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import CloseIcon from '@mui/icons-material/Close';
import Backdrop from '@mui/material/Backdrop';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import styled from '@emotion/styled';

import { ThemeKey } from '@/themes';

import ThemeContext from './ThemeContext';

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
  padding: 16px 16px 8px;
`;

const StyledListItemButton = styled(ListItemButton)`
  padding: 16px 24px;
`;

type Props = {
  open: boolean;
  onClose: () => void;
};

const themeKeys: ThemeKey[] = ['minimal', 'aurora', 'girlish', 'dark', 'forest', 'emo'];

export default function ThemeBackdrop({ open, onClose }: Props) {
  const [theme, setTheme] = useContext(ThemeContext);
  const [t] = useTranslation();

  const handleClick = (value: ThemeKey) => () => {
    setTheme(value);
    onClose();
  };

  return (
    <Backdrop open={open} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <StyledPanel>
        <StyledHeader>
          <Typography variant="h5" fontWeight="bold">
            {t('settings.changeTheme')}
          </Typography>
          <IconButton color="inherit" onClick={onClose} aria-label="Close">
            <CloseIcon />
          </IconButton>
        </StyledHeader>
        <List>
          {themeKeys.map((key) => (
            <StyledListItemButton key={key} selected={key === theme} onClick={handleClick(key)}>
              <ListItemText
                primary={t(`skins.${key}`)}
                slotProps={{ primary: { variant: 'h6' } }}
              />
            </StyledListItemButton>
          ))}
        </List>
      </StyledPanel>
    </Backdrop>
  );
}
