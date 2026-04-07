import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router';

import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import ButtonIcon from '@mui/material/IconButton';
import List from '@mui/material/List';
import Menu from '@mui/material/Menu';

import PageNullState from '@/components/PageNullState';
import BarToolbar from '@/components/common/BarToolbar';
import FlexExpand from '@/components/common/FlexExpand';
import DialogOutlet from '@/components/dialog/DialogOutlet';
import ProfileListItem from '@/components/profiles/ProfileListItem';
import ProfilesContext from '@/config/ProfilesContext';
import LocaleBackdrop from '@/locale/LocaleBackdrop';
import LocaleMenuItem from '@/locale/LocaleMenuItem';
import { removeProfile } from '@/store/ProfileActions';
import ThemeBackdrop from '@/theme/ThemeBackdrop';
import ThemeMenuItem from '@/theme/ThemeMenuItem';

export default function Profiles() {
  const [t] = useTranslation();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [profiles, dispatch] = useContext(ProfilesContext);
  const profileKeys = Object.keys(profiles);
  const [settingsAnchor, setSettingsAnchor] = useState<HTMLElement | null>(null);
  const [localeOpen, setLocaleOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);

  const handleSettingsOpen = (e: React.MouseEvent<HTMLElement>) =>
    setSettingsAnchor(e.currentTarget);
  const handleSettingsClose = () => setSettingsAnchor(null);

  const goToCreate = () => navigate('/profiles/new');
  const handleDelete = (key: string) => dispatch(removeProfile(key));

  return (
    <>
      <BarToolbar
        startAddOn={
          <ButtonIcon onClick={() => navigate('/')} color="primary" aria-label="home">
            <HomeIcon />
          </ButtonIcon>
        }
        title={t('title.profiles')}
        endAddOn={
          <ButtonIcon onClick={handleSettingsOpen} color="primary" aria-label={t('settings.title')}>
            <SettingsIcon />
          </ButtonIcon>
        }
      />
      <FlexExpand>
        {profileKeys.length === 0 ? (
          <PageNullState icon={<PeopleIcon />} message={t('text.noProfiles')}>
            <Button variant="contained" color="primary" onClick={goToCreate}>
              {t('button.createProfile')}
            </Button>
          </PageNullState>
        ) : (
          <>
            <List component="div" sx={{ pb: 10 }}>
              {profileKeys.map((key) => (
                <ProfileListItem
                  key={key}
                  profileKey={key}
                  onDelete={handleDelete}
                  {...profiles[key]}
                />
              ))}
            </List>
            <Fab
              color="primary"
              aria-label={t('button.createProfile')}
              onClick={goToCreate}
              sx={{ position: 'fixed', bottom: 24, right: 24 }}
            >
              <AddIcon />
            </Fab>
          </>
        )}
      </FlexExpand>
      <Menu
        anchorEl={settingsAnchor}
        open={Boolean(settingsAnchor)}
        onClose={handleSettingsClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
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
      <DialogOutlet navigateToOnClose="/profiles" open={pathname !== '/profiles'} />
    </>
  );
}
