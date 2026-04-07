import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';

import styled from '@emotion/styled';

import NameField from '@/components/NameField';
import DialogBody from '@/components/dialog/DialogBody';
import DialogHeadline from '@/components/dialog/DialogHeadline';
import ProfileAvatar from '@/components/profiles/ProfileAvatar';
import ProfilesContext from '@/config/ProfilesContext';
import { createProfile } from '@/store/ProfileActions';
import { AvatarType, EmojiAvatar } from '@/store/State';
import useValidation from '@/utils/validation';

const emojiOptions: { id: EmojiAvatar; label: string }[] = [
  { id: 'man-light', label: '\u{1F468}\u{1F3FB}' },
  { id: 'man-medium', label: '\u{1F468}\u{1F3FD}' },
  { id: 'man-dark', label: '\u{1F468}\u{1F3FF}' },
  { id: 'man-blonde', label: '\u{1F471}\u200D\u2642\uFE0F' },
  { id: 'woman-light', label: '\u{1F469}\u{1F3FB}' },
  { id: 'woman-medium', label: '\u{1F469}\u{1F3FD}' },
  { id: 'woman-dark', label: '\u{1F469}\u{1F3FF}' },
  { id: 'woman-blonde', label: '\u{1F471}\u200D\u2640\uFE0F' },
  { id: 'dog', label: '\u{1F436}' },
  { id: 'cat', label: '\u{1F431}' },
  { id: 'elephant', label: '\u{1F418}' },
  { id: 'butterfly', label: '\u{1F98B}' },
  { id: 'raccoon', label: '\u{1F99D}' },
  { id: 'mouse', label: '\u{1F42D}' },
  { id: 'koala', label: '\u{1F428}' },
  { id: 'fox', label: '\u{1F98A}' },
  { id: 'pig', label: '\u{1F437}' },
  { id: 'hamster', label: '\u{1F439}' },
  { id: 'bear', label: '\u{1F43B}' },
  { id: 'clown', label: '\u{1F921}' },
  { id: 'monkey-see-no-evil', label: '\u{1F648}' },
  { id: 'monkey-hear-no-evil', label: '\u{1F649}' },
  { id: 'monkey-speak-no-evil', label: '\u{1F64A}' },
];

const StyledEmojiRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: calc(var(--mui-spacing) * 1.5);
  padding: var(--mui-spacing) 0;
`;

const StyledEmojiButton = styled.button<{ selected: boolean }>`
  background: ${({ selected }) =>
    selected ? 'var(--button-active-background-color)' : 'transparent'};
  border: 2px solid
    ${({ selected }) =>
      selected
        ? 'var(--text-field-active-border-color)'
        : 'var(--text-field-default-border-color)'};
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.8rem;
  height: 52px;
  width: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledInitialsButton = styled.button<{ selected: boolean }>`
  background: transparent;
  border: 2px solid
    ${({ selected }) =>
      selected
        ? 'var(--text-field-active-border-color)'
        : 'var(--text-field-default-border-color)'};
  border-radius: 50%;
  cursor: pointer;
  padding: 0;
  height: 52px;
  width: 52px;
  display: flex;
  align-items: center;
  justify-content: center;

  .MuiAvatar-root {
    width: 46px;
    height: 46px;
    font-size: 1.2rem;
  }
`;

export default function ProfileForm() {
  const [t] = useTranslation();
  const navigate = useNavigate();
  const { profileKey } = useParams();
  const [profiles, dispatch] = useContext(ProfilesContext);

  const existingProfile = profileKey ? profiles[profileKey] : undefined;
  const isEdit = Boolean(existingProfile);

  const [name, setName] = useState(existingProfile?.name ?? '');
  const [footline, setFootline] = useState(existingProfile?.footline ?? '');
  const [avatarType, setAvatarType] = useState<AvatarType>(existingProfile?.avatarType ?? 'emoji');
  const [emoji, setEmoji] = useState<EmojiAvatar>(existingProfile?.emoji ?? 'man-medium');

  const handleClose = () => navigate('/profiles');

  const { error, onSubmit } = useValidation({
    name,
    onSubmit: () => {
      const key = profileKey ?? Date.now().toString(36);
      dispatch(
        createProfile(key, name, footline, avatarType, avatarType === 'emoji' ? emoji : undefined),
      );
      navigate('/profiles');
    },
    errorMessage: 'errors.requiredTeamName',
  });

  return (
    <>
      <DialogBody
        title={t(isEdit ? 'title.editProfile' : 'title.createProfile')}
        onClose={handleClose}
      >
        <NameField
          label={t('placeholder.profileName')}
          value={name}
          onChange={setName}
          onEnter={onSubmit}
          error={error}
        />
        <NameField
          label={t('placeholder.profileFootline')}
          value={footline}
          onChange={setFootline}
          onEnter={onSubmit}
          sx={{ mt: 2 }}
        />
        <DialogHeadline>{t('text.profileAvatarType')}</DialogHeadline>
        <StyledEmojiRow>
          {emojiOptions.map(({ id, label }) => (
            <StyledEmojiButton
              key={id}
              type="button"
              selected={avatarType === 'emoji' && emoji === id}
              onClick={() => {
                setAvatarType('emoji');
                setEmoji(id);
              }}
            >
              {label}
            </StyledEmojiButton>
          ))}
          <StyledInitialsButton
            type="button"
            selected={avatarType === 'initials'}
            onClick={() => setAvatarType('initials')}
          >
            <Avatar>{name ? name.charAt(0).toUpperCase() : '?'}</Avatar>
          </StyledInitialsButton>
        </StyledEmojiRow>
        <DialogHeadline>{t('text.preview')}</DialogHeadline>
        <Paper variant="outlined">
          <ListItem>
            <ListItemAvatar>
              <ProfileAvatar
                avatarType={avatarType}
                emoji={avatarType === 'emoji' ? emoji : undefined}
                name={name || '?'}
              />
            </ListItemAvatar>
            <ListItemText
              primary={name || t('placeholder.profileName')}
              secondary={footline || t('placeholder.profileFootline')}
            />
          </ListItem>
        </Paper>
      </DialogBody>
      <DialogActions>
        <Button onClick={handleClose}>{t('button.cancel')}</Button>
        <Button variant="contained" color="primary" onClick={onSubmit}>
          {t(isEdit ? 'button.saveProfile' : 'button.createProfile')}
        </Button>
      </DialogActions>
    </>
  );
}
