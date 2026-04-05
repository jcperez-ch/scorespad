import { useTranslation } from 'react-i18next';

import TranslateIcon from '@mui/icons-material/Translate';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';

import CustomMenuIcon from '@/components/common/CustomMenuIcon';

type Props = {
  onClick: () => void;
};

export default function LocaleMenuItem({ onClick }: Props) {
  const [t] = useTranslation();

  return (
    <MenuItem onClick={onClick}>
      <CustomMenuIcon>
        <TranslateIcon />
      </CustomMenuIcon>
      <ListItemText>{t('settings.changeLocale')}</ListItemText>
    </MenuItem>
  );
}
