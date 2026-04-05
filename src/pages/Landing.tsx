import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router';

import AddIcon from '@mui/icons-material/Add';
import GamesIcon from '@mui/icons-material/Games';
import SettingsIcon from '@mui/icons-material/Settings';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import Menu from '@mui/material/Menu';

import PageNullState from '@/components/PageNullState';
import DialogOutlet from '@/components/dialog/DialogOutlet';
import GameListItem from '@/components/games/GameListItem';
import GamesContext from '@/config/GamesContext';
import LocaleBackdrop from '@/locale/LocaleBackdrop';
import LocaleMenuItem from '@/locale/LocaleMenuItem';
import ThemeBackdrop from '@/theme/ThemeBackdrop';
import ThemeMenuItem from '@/theme/ThemeMenuItem';

export default function Landing() {
  const [t] = useTranslation();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [games] = useContext(GamesContext);
  const [settingsAnchor, setSettingsAnchor] = useState<HTMLElement | null>(null);
  const [localeOpen, setLocaleOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);

  const goToCreateGame = () => navigate('game');
  const handleSettingsOpen = (e: React.MouseEvent<HTMLElement>) =>
    setSettingsAnchor(e.currentTarget);
  const handleSettingsClose = () => setSettingsAnchor(null);

  return (
    <>
      {Object.keys(games).length === 0 ? (
        <PageNullState icon={<GamesIcon />} message={t('text.noGames')}>
          <Button variant="contained" color="primary" onClick={goToCreateGame}>
            {t('button.createGame')}
          </Button>
        </PageNullState>
      ) : (
        <List component="div">
          {Object.keys(games).map((gameKey) => (
            <GameListItem
              key={gameKey}
              gameKey={gameKey}
              onClick={(id: string) => navigate(`games/${id}`)}
              {...games[gameKey]}
            />
          ))}
        </List>
      )}
      <Fab
        color="primary"
        aria-label={t('button.createGame')}
        onClick={goToCreateGame}
        sx={{ position: 'fixed', bottom: 24, right: 24 }}
      >
        <AddIcon />
      </Fab>
      <Fab
        color="default"
        aria-label={t('settings.title')}
        onClick={handleSettingsOpen}
        sx={{
          position: 'fixed',
          bottom: 24,
          left: 24,
          backgroundColor: 'var(--fab-default-background-color)',
          color: 'var(--fab-default-text-color)',
          '&:hover': { backgroundColor: 'var(--fab-default-background-color)', opacity: 0.85 },
        }}
      >
        <SettingsIcon />
      </Fab>
      <Menu
        anchorEl={settingsAnchor}
        open={Boolean(settingsAnchor)}
        onClose={handleSettingsClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <LocaleMenuItem
          onClick={() => {
            handleSettingsClose();
            setLocaleOpen(true);
          }}
        />
        <ThemeMenuItem
          onClick={() => {
            handleSettingsClose();
            setThemeOpen(true);
          }}
        />
      </Menu>
      <LocaleBackdrop open={localeOpen} onClose={() => setLocaleOpen(false)} />
      <ThemeBackdrop open={themeOpen} onClose={() => setThemeOpen(false)} />
      <DialogOutlet navigateToOnClose="/" open={pathname !== '/'} />
    </>
  );
}
